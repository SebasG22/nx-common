import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';

import { NxModule } from '@nrwl/nx';
import { DataPersistence } from '@nrwl/nx';
import { hot } from '@nrwl/nx/testing';

import { FirestoreWorkerEffects } from './firestore-worker.effects';
import {
  LoadFirestoreWorker,
  FirestoreWorkerLoaded
} from './firestore-worker.actions';

describe('FirestoreWorkerEffects', () => {
  let actions: Observable<any>;
  let effects: FirestoreWorkerEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NxModule.forRoot(),
        StoreModule.forRoot({}),
        EffectsModule.forRoot([])
      ],
      providers: [
        FirestoreWorkerEffects,
        DataPersistence,
        provideMockActions(() => actions)
      ]
    });

    effects = TestBed.get(FirestoreWorkerEffects);
  });

  describe('loadFirestoreWorker$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: new LoadFirestoreWorker() });
      expect(effects.loadFirestoreWorker$).toBeObservable(
        hot('-a-|', { a: new FirestoreWorkerLoaded([]) })
      );
    });
  });
});
