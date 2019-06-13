import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  apiEndPoint = 'http://localhost:8080/Gradle___MOOC_Analyser_Server_1_0_SNAPSHOT_war__exploded_/uploadLogs';

  constructor(private http: HttpClient) {}

  fileChange(event) {
    const fileList: FileList = event.target.files;
    if (fileList.length == 0) {
      return
    }
    
    const file: File = fileList[0];
    const formData: FormData = new FormData();
    formData.append('uploadFile', file, file.name);
    const headers = new HttpHeaders();
    /** In Angular 5, including the header Content-Type can invalidate your request */
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    const options = { headers };
    this.http.post(`${this.apiEndPoint}`, formData, options)
      .subscribe(
        data => console.log('success'),
        error => console.log(error)
      );
  }
}
