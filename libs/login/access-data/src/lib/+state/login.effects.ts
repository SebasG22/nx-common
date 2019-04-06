import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';

import { LoginPartialState } from './login.reducer';
import {
  LoadLogin,
  LoginLoaded,
  LoginLoadError,
  LoginActionTypes,
  LoginUserWithFirebaseProvider,
  LoginUserWithFirebaseProviderError
} from './login.actions';
import { LoginService } from '../login.service';

import { map } from 'rxjs/operators';

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


  @Effect() loginUserWithFirebaseProvider$ = this.dataPersistence.fetch(
    LoginActionTypes.LoginUserWithFirebaseProvider,
    {
      run: (action: LoginUserWithFirebaseProvider, state: LoginPartialState) => {
        // Your custom REST 'load' logic goes here. For now just return an empty list...
        return this.loginService.loginWithGoogle().pipe(
          map((user) => {
            console.warn(user);
            return new LoginLoaded([]);
          }));
      },

      onError: (action: LoginUserWithFirebaseProvider, error) => {
        console.error('Error', error);
        return new LoginUserWithFirebaseProviderError(error);
      }
    }
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<LoginPartialState>,
    private loginService: LoginService
  ) { }
}
