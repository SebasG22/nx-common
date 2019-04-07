import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { LoginPartialState, Entity } from './login.reducer';
import { loginQuery } from './login.selectors';
import { LoadLogin, LoginUserWithFirebaseProvider, AuthChanged } from './login.actions';

@Injectable()
export class LoginFacade {
  loaded$ = this.store.pipe(select(loginQuery.getLoaded));
  allLogin$ = this.store.pipe(select(loginQuery.getAllLogin));
  selectedLogin$ = this.store.pipe(select(loginQuery.getSelectedLogin));

  constructor(private store: Store<LoginPartialState>) { }

  loadAll() {
    this.store.dispatch(new LoadLogin());
  }

  loginUserWithFirebaseProvider(providerInformation: string) {
    this.store.dispatch(new LoginUserWithFirebaseProvider());
  }

  authChanged(payload: Entity = null) {
    this.store.dispatch(new AuthChanged(payload));
  }


}
