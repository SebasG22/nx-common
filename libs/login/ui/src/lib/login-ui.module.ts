import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirebaseProviderItemComponent } from './firebase-provider-item/firebase-provider-item.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    FirebaseProviderItemComponent
  ],
  exports: [
    FirebaseProviderItemComponent
  ],
})
export class LoginUIModule { }
