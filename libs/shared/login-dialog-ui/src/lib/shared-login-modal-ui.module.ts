import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckingAuthModalComponent } from './checking-auth-modal/checking-auth-modal.component';
import { SharedDialogUiModule } from '@common-nx/shared/dialog-ui';
import { LoginModalUIService } from './login-modal-ui.service';

@NgModule({
  imports: [
    CommonModule,
    SharedDialogUiModule
  ],
  declarations: [CheckingAuthModalComponent],
  entryComponents: [CheckingAuthModalComponent],
  providers: [LoginModalUIService]
})
export class SharedLoginModalUiModule { }
