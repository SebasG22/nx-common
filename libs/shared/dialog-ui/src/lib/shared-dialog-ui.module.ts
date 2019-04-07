import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomService } from './dom.service';
import { ModalService } from './modal.service';

@NgModule({
  imports: [CommonModule],
  providers: [DomService, ModalService]
})
export class SharedDialogUiModule {}
