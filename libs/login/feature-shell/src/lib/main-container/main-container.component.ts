import { Component, OnInit } from '@angular/core';
import { LoginFacade } from '@common-nx/login/access-data';
import { ModalService } from '@common-nx/login/ui';
import { CheckingAuthModalComponent } from '@common-nx/login/ui';

@Component({
  selector: 'feature-shell-login-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss']
})
export class MainContainerComponent implements OnInit {

  constructor(
    private loginFacade: LoginFacade,
    private modalService: ModalService
  ) { }

  ngOnInit() {
    this.modalService.init(CheckingAuthModalComponent, {}, {});
  }

  loginWithProvider(providerInformation: string) {
    this.loginFacade.loginUserWithFirebaseProvider(providerInformation);
  }

}
