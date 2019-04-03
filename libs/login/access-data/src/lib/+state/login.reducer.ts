import { LoginAction, LoginActionTypes } from './login.actions';

export const LOGIN_FEATURE_KEY = 'login';

/**
 * Interface for the 'Login' data used in
 *  - LoginState, and
 *  - loginReducer
 *
 *  Note: replace if already defined in another module
 */

/* tslint:disable:no-empty-interface */
export interface Entity {}

export interface LoginState {
  list: Entity[]; // list of Login; analogous to a sql normalized table
  selectedId?: string | number; // which Login record has been selected
  loaded: boolean; // has the Login list been loaded
  error?: any; // last none error (if any)
}

export interface LoginPartialState {
  readonly [LOGIN_FEATURE_KEY]: LoginState;
}

export const initialState: LoginState = {
  list: [],
  loaded: false
};

export function loginReducer(
  state: LoginState = initialState,
  action: LoginAction
): LoginState {
  switch (action.type) {
    case LoginActionTypes.LoginLoaded: {
      state = {
        ...state,
        list: action.payload,
        loaded: true
      };
      break;
    }
  }
  return state;
}
