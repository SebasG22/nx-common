import { Component, OnInit } from '@angular/core';
import { LoginFacade } from '@common-nx/login/access-data';
import { LoginModalUIService } from '@common-nx/shared/login-dialog-ui';

@Component({
  selector: 'feature-shell-login-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss']
})
export class MainContainerComponent implements OnInit {

  constructor(
    private loginFacade: LoginFacade,
    private sharedModalLoginService: LoginModalUIService
  ) { }

  ngOnInit() {
    this.sharedModalLoginService.openCheckingAuthModal();
  }

  closeModal() {
    this.sharedModalLoginService.closeModal();
  }

  loginWithProvider(providerInformation: string) {
    this.loginFacade.loginUserWithFirebaseProvider(providerInformation);
  }

}
