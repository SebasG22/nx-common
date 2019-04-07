import { Action } from '@ngrx/store';
import { Entity } from './login.reducer';

export enum LoginActionTypes {
  LoadLogin = '[Login] Load Login',
  LoginLoaded = '[Login] Login Loaded',
  LoginLoadError = '[Login] Login Load Error',
  LoginUserWithFirebaseProvider = '[Login] Login User With Firebase Provider',
  UserLoggedWithFirebaseProvider = '[Login] User Logged With Firebase Provider',
  LoginUserWithFirebaseProviderError = '[Login] LoginUserWithFirebaseProvider Error',
  ListenAuth = '[Login] Listen Auth',
  AuthChanged = '[Login] Auth Change'
}

export class LoadLogin implements Action {
  readonly type = LoginActionTypes.LoadLogin;
}

export class LoginLoadError implements Action {
  readonly type = LoginActionTypes.LoginLoadError;
  constructor(public payload: any) { }
}

export class LoginLoaded implements Action {
  readonly type = LoginActionTypes.LoginLoaded;
  constructor(public payload: Entity[]) { }
}

export class LoginUserWithFirebaseProvider implements Action {
  readonly type = LoginActionTypes.LoginUserWithFirebaseProvider;
  constructor(public payload: { provider: any } = null) { }
}

export class UserLoggedWithFirebaseProvider implements Action {
  readonly type = LoginActionTypes.LoginUserWithFirebaseProvider;
  constructor(public payload: string) { }
}

export class LoginUserWithFirebaseProviderError implements Action {
  readonly type = LoginActionTypes.LoginUserWithFirebaseProviderError;
  constructor(public payload: Entity) { }
}

export class ListenAuth implements Action {
  readonly type = LoginActionTypes.ListenAuth;
}

export class AuthChanged implements Action {
  readonly type = LoginActionTypes.AuthChanged;
  constructor(public payload: Entity) { }
}

export type LoginAction = LoadLogin | LoginLoaded | LoginLoadError | LoginUserWithFirebaseProvider | UserLoggedWithFirebaseProvider | LoginUserWithFirebaseProviderError | ListenAuth | AuthChanged;

export const fromLoginActions = {
  LoadLogin,
  LoginLoaded,
  LoginLoadError,
  LoginUserWithFirebaseProvider,
  UserLoggedWithFirebaseProvider,
  LoginUserWithFirebaseProviderError,
  ListenAuth,
  AuthChanged
};
