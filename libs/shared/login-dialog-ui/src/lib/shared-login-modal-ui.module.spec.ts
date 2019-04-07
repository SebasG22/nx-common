import { async, TestBed } from '@angular/core/testing';
import { SharedLoginModalUiModule } from './shared-login-modal-ui.module';

describe('SharedLoginModalUiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedLoginModalUiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedLoginModalUiModule).toBeDefined();
  });
});
