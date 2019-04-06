import { Component, OnInit } from '@angular/core';
import { LoginFacade } from '@common-nx/login/access-data';

@Component({
  selector: 'feature-shell-login-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss']
})
export class MainContainerComponent implements OnInit {

  constructor(
    private loginFacade: LoginFacade
  ) { }

  ngOnInit() {
  }

  loginWithProvider(providerInformation: string) {
    this.loginFacade.loginUserWithFirebaseProvider(providerInformation);
  }

}
