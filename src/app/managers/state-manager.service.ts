import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from 'rxjs'

@Injectable()
export class StateManagerService
{
    private isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
        sessionStorage.getItem("token") && sessionStorage.getItem("token").length > 1
    )
    isAuthenticated$: Observable<boolean> = this.isAuthenticated.asObservable()

    login()
    {
        this.isAuthenticated.next(true)
    }

    logout()
    {
        sessionStorage.clear()
        this.isAuthenticated.next(false)
    }
}