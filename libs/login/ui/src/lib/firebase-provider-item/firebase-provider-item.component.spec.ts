/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FirebaseProviderItemComponent } from './firebase-provider-item.component';
import { Subject } from 'rxjs';

describe('FirebaseProviderItemComponent', () => {
  let component: FirebaseProviderItemComponent;
  let fixture: ComponentFixture<FirebaseProviderItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FirebaseProviderItemComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    

    fixture = TestBed.createComponent(FirebaseProviderItemComponent);
    component = fixture.componentInstance;
    component.providerInformation = { name: 'Google' };
    fixture.detectChanges();
  });

  it('should create', () => {

    expect(component).toBeTruthy();
  });
});
