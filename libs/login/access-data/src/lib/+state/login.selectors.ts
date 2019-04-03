import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LOGIN_FEATURE_KEY, LoginState } from './login.reducer';

// Lookup the 'Login' feature state managed by NgRx
const getLoginState = createFeatureSelector<LoginState>(LOGIN_FEATURE_KEY);

const getLoaded = createSelector(
  getLoginState,
  (state: LoginState) => state.loaded
);
const getError = createSelector(
  getLoginState,
  (state: LoginState) => state.error
);

const getAllLogin = createSelector(
  getLoginState,
  getLoaded,
  (state: LoginState, isLoaded) => {
    return isLoaded ? state.list : [];
  }
);
const getSelectedId = createSelector(
  getLoginState,
  (state: LoginState) => state.selectedId
);
const getSelectedLogin = createSelector(
  getAllLogin,
  getSelectedId,
  (login, id) => {
    const result = login.find(it => it['id'] === id);
    return result ? Object.assign({}, result) : undefined;
  }
);

export const loginQuery = {
  getLoaded,
  getError,
  getAllLogin,
  getSelectedLogin
};
