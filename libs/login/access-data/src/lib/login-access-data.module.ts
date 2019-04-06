import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  LOGIN_FEATURE_KEY,
  initialState as loginInitialState,
  loginReducer
} from './+state/login.reducer';
import { LoginEffects } from './+state/login.effects';
import { LoginFacade } from './+state/login.facade';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { LoginService } from './login.service';
import { ActionReducer } from '@ngrx/store';
import { storeLogger } from 'ngrx-store-logger';
import { storeFreeze } from 'ngrx-store-freeze';

export function logger(reducer: ActionReducer<any>): any {
  // default, no options
  return storeLogger()(reducer);
}


@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(LOGIN_FEATURE_KEY, loginReducer, {
      initialState: loginInitialState,
      metaReducers: true ? [storeFreeze, logger] : []
    }),
    EffectsModule.forFeature([LoginEffects]),
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyAC0LLoGGHXvDHDUmxh0UvJqratkncO9IM",
      authDomain: "nx-common.firebaseapp.com",
      databaseURL: "https://nx-common.firebaseio.com",
      projectId: "nx-common",
      storageBucket: "nx-common.appspot.com",
      messagingSenderId: "297058555731"
    }),
    AngularFireAuthModule
  ]
})
export class LoginAccessDataModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: LoginAccessDataModule,
      providers: [LoginService, LoginFacade]
    }
  }
}
