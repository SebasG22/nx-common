import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'login-ui-firebase-provider-item',
  templateUrl: './firebase-provider-item.component.html',
  styleUrls: ['./firebase-provider-item.component.scss']
})
export class FirebaseProviderItemComponent implements OnInit {
  @Input() providerInformation: string;

  @Output() providerClicked: EventEmitter<string> = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  providerClick() {
    this.providerClicked.emit(this.providerInformation);
  }
}
