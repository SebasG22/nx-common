/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FirebaseProvidersComponent } from './firebase-providers.component';
import { FirebaseProviderItemComponent } from '../firebase-provider-item/firebase-provider-item.component';

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

    it('should emit the provider information when providerClick was called', () => {
      spyOn(component,'providerClicked');
      const providerInformation = { name: 'Google' };
      
      component.providerClick(providerInformation);

      expect(component.providerClicked).toHaveBeenCalledWith(providerInformation);
    });
  });
});
