import { Injectable } from '@angular/core';
import {
  Effect,
  Actions,
  ofType,
  ROOT_EFFECTS_INIT,
  OnInitEffects
} from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';

import { LoginPartialState } from './login.reducer';
import {
  LoadLogin,
  LoginLoaded,
  LoginLoadError,
  LoginActionTypes,
  LoginUserWithFirebaseProvider,
  LoginUserWithFirebaseProviderError,
  ListenAuth,
  AuthChanged
} from './login.actions';
import { LoginService } from '../login.service';

import { map } from 'rxjs/operators';
import { LoginModalUIService } from '@common-nx/shared/login-dialog-ui';
import { Observable, defer, of, asyncScheduler } from 'rxjs';
import { INIT, Action } from '@ngrx/store';
import { UserInfo, User } from 'firebase';

@Injectable()
export class LoginEffects implements OnInitEffects {
  // @Effect()
  // $init = of(new ListenAuth, asyncScheduler);

  @Effect() listenAuth$ = this.dataPersistence.fetch(
    LoginActionTypes.ListenAuth,
    {
      run: (action: ListenAuth, state: LoginPartialState) => {
        return <any>this.loginService.listenAuth().pipe(
          map((data: User) => {
            if (data) {
              const {
                displayName,
                email,
                phoneNumber,
                photoURL,
                providerId,
                uid
              } = data;
              return new AuthChanged({
                displayName,
                email,
                phoneNumber,
                photoURL,
                providerId,
                uid
              });
            }
            return new AuthChanged(data);
          })
        );
      },

      onError: (action: ListenAuth, error) => {
        console.error('Error', error);
      }
    }
  );

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
      run: (
        action: LoginUserWithFirebaseProvider,
        state: LoginPartialState
      ) => {
        // Your custom REST 'load' logic goes here. For now just return an empty list...
        return this.loginService.loginWithGoogle().pipe(
          map(user => {
            console.warn(user);
            return new LoginLoaded([]);
          })
        );
      },

      onError: (action: LoginUserWithFirebaseProvider, error) => {
        console.error('Error', error);
        this.loginModalUIService.openCheckingAuthModal();
        return new LoginUserWithFirebaseProviderError(error);
      }
    }
  );

  ngrxOnInitEffects(): Action {
    return { type: LoginActionTypes.ListenAuth };
  }

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<LoginPartialState>,
    private loginService: LoginService,
    private loginModalUIService: LoginModalUIService
  ) {}
}
