import { Component } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { StateManagerService } from '../managers/state-manager.service'
import { ModalManagerService } from "../managers/modal-manager.service"


@Component({
    selector: 'registration',
    templateUrl: 'registration.component.html',
    providers: [ StateManagerService ]
})
export class RegistrationComponent
{
    registerUrl = "http://localhost:8080/register"

    constructor(
        private http: HttpClient, 
        private router: Router,
        private stateManagerService: StateManagerService,
        private modalManagerService: ModalManagerService
    ) { }

    register(login: string, password: string, email: string)
    {
        this.http.post(this.registerUrl, 
            {
                userName: login,
                password: password,
                email: email
            })
            .subscribe(
                message => {
                    if (message['message'] == "success") 
                    {
                        sessionStorage.setItem(
                            'token', 
                            btoa(login + ':' + password)
                        )
                        sessionStorage.setItem('authorized', "true")
                        this.router.navigate([''])
                        this.modalManagerService.closeRegisterModal()
                        this.stateManagerService.login()
                    } 
                    else if (message['message'] == "login_exists") 
                    {
                        alert("Пользователь с таким именем уже существует!")
                    }
                    else if (message['message'] == "email_exists")
                    {
                        alert("Пользователь с таким электронным адресом уже существует!")
                    }
                },
                error =>
                {
                    alert(error.message)
                }
            );
    }
}