import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import { StateManagerService                      } from "./managers/state-manager.service"
import { ModalManagerService                      } from "./managers/modal-manager.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [ StateManagerService, ModalManagerService ]
})
export class AppComponent {
  @ViewChild('closeLoginModal')    closeLoginModalButton    : ElementRef
  @ViewChild('closeRegisterModal') closeRegisterModalButton : ElementRef

  authenticated: boolean

  modalClass = "modal fade show"

  constructor(
    private stateManagerService: StateManagerService,
    private modalManagerService: ModalManagerService
  ) 
  { }

  ngOnInit() 
  {
    this.modalManagerService.setLoginModal(this.closeLoginModalButton)
    this.modalManagerService.setRegisterModal(this.closeRegisterModalButton)
  }

  subscription = this.stateManagerService.isAuthenticated$.subscribe(data => this.authenticated = data)

  logout()
  {
    this.stateManagerService.logout()
  }
}
