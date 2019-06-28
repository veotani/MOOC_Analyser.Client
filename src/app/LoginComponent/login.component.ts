import { Component, HostBinding } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { StateManagerService } from "./../managers/state-manager.service"
import { ModalManagerService } from "../managers/modal-manager.service"


@Component({
    selector: 'login',
    templateUrl: 'login.component.html'
})
export class LoginComponent
{
    loginUrl = "http://localhost:8080/login"

    constructor(
        private http: HttpClient, 
        private router: Router,
        private stateManagerService: StateManagerService,
        private modalManagerService: ModalManagerService
    ) 
    { }

    auth(login, password)
    {
        this.http.post(this.loginUrl, 
            {
                userName: login,
                password: password
            })
            .subscribe(isValid => { 
                if (isValid) {
                    sessionStorage.setItem(
                      'token', 
                      btoa(login + ':' + password)
                    );
                    sessionStorage.setItem('authorized', "true")
                    this.stateManagerService.login()
                    this.modalManagerService.closeLoginModal()
                this.router.navigate(['']);
                } else {
                    alert("Authentication failed.")
                }
            });
    }
}