import { async, TestBed } from '@angular/core/testing';
import { SharedDialogUiModule } from './shared-dialog-ui.module';

describe('SharedDialogUiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedDialogUiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedDialogUiModule).toBeDefined();
  });
});
