import { async, TestBed } from '@angular/core/testing';
import { LoginUIModule } from './login-ui.module';

describe('LoginUiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [LoginUIModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(LoginUIModule).toBeDefined();
  });
});
