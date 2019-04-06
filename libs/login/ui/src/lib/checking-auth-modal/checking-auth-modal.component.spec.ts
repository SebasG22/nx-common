/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CheckingAuthModalComponent } from './checking-auth-modal.component';

describe('CheckingAuthModalComponent', () => {
  let component: CheckingAuthModalComponent;
  let fixture: ComponentFixture<CheckingAuthModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CheckingAuthModalComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckingAuthModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
