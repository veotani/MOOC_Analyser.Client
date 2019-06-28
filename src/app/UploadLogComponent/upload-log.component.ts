import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  templateUrl: './upload-log.component.html'
})
export class UploadLogComponent implements OnInit 
{

  apiEndPoint = 'http://localhost:8080/uploadLogs';
  roleApi = "http://localhost:8080/currentUserRole"
  isAuthorized = false
  fileUpload: FormData
  fileLabelText = "Файл логов"
  canShowContent: boolean = false

  constructor(
      private http: HttpClient,
      private router: Router
      ) 
    {
        const headers = new HttpHeaders({
            authorization: 'Basic ' + sessionStorage.getItem("token")
        })
        var role: string
        this.http.get(this.roleApi, { headers: headers})
            .subscribe(
                data => 
                {
                    role = data['role']
                    if (role != "ADMIN")
                        this.router.navigate(['unavaliable-page'])
                    this.canShowContent = true
                },
                error => this.router.navigate(['unavaliable-page'])
            )
    }

  ngOnInit()
  {      
  }

  fileChange(event) {
    const fileList: FileList = event.target.files
    if (fileList.length == 0) {
        this.fileLabelText = "Файл логов"
        return
    }    
    const file: File = fileList[0]
    const formData: FormData = new FormData()
    formData.append('uploadFile', file, file.name)
    this.fileUpload = formData
    this.fileLabelText = file.name
  }

  sendFile()
  {
    if (!this.fileUpload)
    {
        alert("Сначала нужно выбрать файл.")
        return
    }
    const headers = new HttpHeaders();
    /** In Angular 5, including the header Content-Type can invalidate your request */
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    const options = { headers: headers }
    this.http.post(this.apiEndPoint, this.fileUpload, options)
      .subscribe(
        data => console.log('success'),
        error => console.log(error)
    )
  }
}