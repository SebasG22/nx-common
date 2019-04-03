import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/nx/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/nx';

import { LoginEffects } from './login.effects';
import { LoginFacade } from './login.facade';

import { loginQuery } from './login.selectors';
import { LoadLogin, LoginLoaded } from './login.actions';
import {
  LoginState,
  Entity,
  initialState,
  loginReducer
} from './login.reducer';

interface TestSchema {
  login: LoginState;
}

describe('LoginFacade', () => {
  let facade: LoginFacade;
  let store: Store<TestSchema>;
  let createLogin;

  beforeEach(() => {
    createLogin = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature('login', loginReducer, { initialState }),
          EffectsModule.forFeature([LoginEffects])
        ],
        providers: [LoginFacade]
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          NxModule.forRoot(),
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule
        ]
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.get(Store);
      facade = TestBed.get(LoginFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async done => {
      try {
        let list = await readFirst(facade.allLogin$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.loadAll();

        list = await readFirst(facade.allLogin$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `LoginLoaded` to manually submit list for state management
     */
    it('allLogin$ should return the loaded list; and loaded flag == true', async done => {
      try {
        let list = await readFirst(facade.allLogin$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        store.dispatch(
          new LoginLoaded([createLogin('AAA'), createLogin('BBB')])
        );

        list = await readFirst(facade.allLogin$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(2);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
