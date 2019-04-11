import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'login-ui-firebase-providers',
  templateUrl: './firebase-providers.component.html',
  styleUrls: ['./firebase-providers.component.scss']
})
export class FirebaseProvidersComponent  {

  @Input() public providers: any[];

  @Output() public providerClicked = new EventEmitter();

  constructor() { }

  providerClick(providerInformation){
    this.providerClicked.emit(providerInformation);
  }

}
