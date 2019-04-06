import { Component } from '@angular/core';

@Component({
  selector: 'common-nx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  closeModal() {
    console.log('close modal clicked');
  }
}
