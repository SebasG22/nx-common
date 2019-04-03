import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';

import { NxModule } from '@nrwl/nx';
import { DataPersistence } from '@nrwl/nx';
import { hot } from '@nrwl/nx/testing';

import { LoginEffects } from './login.effects';
import { LoadLogin, LoginLoaded } from './login.actions';

describe('LoginEffects', () => {
  let actions: Observable<any>;
  let effects: LoginEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NxModule.forRoot(),
        StoreModule.forRoot({}),
        EffectsModule.forRoot([])
      ],
      providers: [
        LoginEffects,
        DataPersistence,
        provideMockActions(() => actions)
      ]
    });

    effects = TestBed.get(LoginEffects);
  });

  describe('loadLogin$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: new LoadLogin() });
      expect(effects.loadLogin$).toBeObservable(
        hot('-a-|', { a: new LoginLoaded([]) })
      );
    });
  });
});
