import { async, TestBed } from '@angular/core/testing';
import { LoginFeatureShellModule } from './login-feature-shell.module';

describe('LoginFeatureShellModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [LoginFeatureShellModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(LoginFeatureShellModule).toBeDefined();
  });
});
