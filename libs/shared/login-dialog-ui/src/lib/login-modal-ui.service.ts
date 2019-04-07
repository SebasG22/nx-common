import { Injectable } from '@angular/core';
import { ModalService } from '@common-nx/shared/dialog-ui';
import { CheckingAuthModalComponent } from './checking-auth-modal/checking-auth-modal.component';

@Injectable()
export class LoginModalUIService {
    constructor(private modalService: ModalService) { }

    public openCheckingAuthModal() {
        this.modalService.init(CheckingAuthModalComponent, {}, {});
    }

    public closeModal() {
        this.modalService.destroy();
    }
}