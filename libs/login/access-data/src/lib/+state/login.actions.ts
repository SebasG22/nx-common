import { Action } from '@ngrx/store';
import { Entity } from './login.reducer';

export enum LoginActionTypes {
  LoadLogin = '[Login] Load Login',
  LoginLoaded = '[Login] Login Loaded',
  LoginLoadError = '[Login] Login Load Error'
}

export class LoadLogin implements Action {
  readonly type = LoginActionTypes.LoadLogin;
}

export class LoginLoadError implements Action {
  readonly type = LoginActionTypes.LoginLoadError;
  constructor(public payload: any) {}
}

export class LoginLoaded implements Action {
  readonly type = LoginActionTypes.LoginLoaded;
  constructor(public payload: Entity[]) {}
}

export type LoginAction = LoadLogin | LoginLoaded | LoginLoadError;

export const fromLoginActions = {
  LoadLogin,
  LoginLoaded,
  LoginLoadError
};
