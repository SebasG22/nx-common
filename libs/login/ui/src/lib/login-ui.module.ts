import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckingAuthModalComponent } from './checking-auth-modal/checking-auth-modal.component';
import { FirebaseProviderItemComponent } from './firebase-provider-item/firebase-provider-item.component';
import { DomService } from './dom.service';
import { ModalService } from './modal.service';

@NgModule({
  imports: [CommonModule],
  declarations: [
    CheckingAuthModalComponent, FirebaseProviderItemComponent
  ],
  exports: [
    CheckingAuthModalComponent, FirebaseProviderItemComponent
  ],
  providers: [
    DomService,
    ModalService
  ],
  entryComponents: [
    CheckingAuthModalComponent
  ]
})
export class LoginUIModule { }
