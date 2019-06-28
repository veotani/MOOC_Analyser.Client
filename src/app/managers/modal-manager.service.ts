import { Injectable, ElementRef } from "@angular/core";

@Injectable()
export class ModalManagerService
{
    loginModalButton    : ElementRef
    registerModalButton : ElementRef

    closeLoginModal()
    {
        this.loginModalButton.nativeElement.click()
    }

    closeRegisterModal()
    {
        this.registerModalButton.nativeElement.click()
    }

    setLoginModal(loginModal)
    {
        this.loginModalButton = loginModal
    }

    setRegisterModal(registerModal)
    {
        this.registerModalButton = registerModal
    }
}