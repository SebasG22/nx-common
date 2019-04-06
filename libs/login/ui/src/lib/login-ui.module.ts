import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckingAuthModalComponent } from './checking-auth-modal/checking-auth-modal.component';
import { FirebaseProviderItemComponent } from './firebase-provider-item/firebase-provider-item.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    CheckingAuthModalComponent, FirebaseProviderItemComponent
  ],
  exports: [
    CheckingAuthModalComponent, FirebaseProviderItemComponent
  ]
})
export class LoginUIModule { }
