import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirebaseProviderItemComponent } from './firebase-provider-item/firebase-provider-item.component';
import { FirebaseProvidersComponent } from './firebase-providers/firebase-providers.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    FirebaseProviderItemComponent,
    FirebaseProvidersComponent
  ],
  exports: [
    FirebaseProviderItemComponent,
    FirebaseProvidersComponent
  ],
})
export class LoginUIModule { }
