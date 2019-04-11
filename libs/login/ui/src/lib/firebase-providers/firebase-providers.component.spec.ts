/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FirebaseProvidersComponent } from './firebase-providers.component';
import { FirebaseProviderItemComponent } from '../firebase-provider-item/firebase-provider-item.component';
import { firebaseProviderInformationMock } from '../login-feature-shell.mocks';

describe('FirebaseProvidersComponent', () => {
  let component: FirebaseProvidersComponent;
  let fixture: ComponentFixture<FirebaseProvidersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirebaseProvidersComponent, FirebaseProviderItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirebaseProvidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('providerClick', () =>{

    let providerInformation;
    beforeEach(() => {
      providerInformation = firebaseProviderInformationMock;
      spyOn(component.providerClicked,'emit');
    }); 

    it('should emit the provider information when providerClick was called', () => {
      component.providerClick(providerInformation);
      fixture.detectChanges();

      expect(component.providerClicked.emit).toHaveBeenCalledWith(providerInformation);
    });
  });
});
