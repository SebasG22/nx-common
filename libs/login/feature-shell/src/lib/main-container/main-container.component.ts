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

  public firebaseProviders = [
    {
      name: 'Google'
    },
    {
      name: 'Facebook'
    },
    {
      name: 'Github'
    }
  ]

  ngOnInit() {
    this.sharedModalLoginService.openCheckingAuthModal();
  }

  closeModal() {
    this.sharedModalLoginService.closeModal();
  }

  loginWithProvider(providerInformation: any) {
    this.loginFacade.loginUserWithFirebaseProvider(providerInformation.name);
  }

}
