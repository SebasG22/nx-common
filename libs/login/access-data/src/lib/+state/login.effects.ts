import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';

import { LoginPartialState } from './login.reducer';
import {
  LoadLogin,
  LoginLoaded,
  LoginLoadError,
  LoginActionTypes
} from './login.actions';

@Injectable()
export class LoginEffects {
  @Effect() loadLogin$ = this.dataPersistence.fetch(
    LoginActionTypes.LoadLogin,
    {
      run: (action: LoadLogin, state: LoginPartialState) => {
        // Your custom REST 'load' logic goes here. For now just return an empty list...
        return new LoginLoaded([]);
      },

      onError: (action: LoadLogin, error) => {
        console.error('Error', error);
        return new LoginLoadError(error);
      }
    }
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<LoginPartialState>
  ) {}
}
