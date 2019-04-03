import { NgModule } from '@angular/core';
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

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(LOGIN_FEATURE_KEY, loginReducer, {
      initialState: loginInitialState
    }),
    EffectsModule.forFeature([LoginEffects])
  ],
  providers: [LoginFacade]
})
export class LoginAccessDataModule {}
