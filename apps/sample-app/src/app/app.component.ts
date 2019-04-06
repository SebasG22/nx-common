import { Component } from '@angular/core';
import { LoginFacade } from '@common-nx/login/access-data';

@Component({
  selector: 'common-nx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sample-app';

  // constructor(private loginFacade: LoginFacade) {
  //   this.loginFacade.loginUserWithFirebaseProvider();
  // }
}
