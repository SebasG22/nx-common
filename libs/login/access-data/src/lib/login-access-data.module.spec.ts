import { async, TestBed } from '@angular/core/testing';
import { LoginAccessDataModule } from './login-access-data.module';

describe('LoginAccessDataModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [LoginAccessDataModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(LoginAccessDataModule).toBeDefined();
  });
});
