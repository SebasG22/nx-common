import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/nx/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/nx';

import { FirestoreWorkerEffects } from './firestore-worker.effects';
import { FirestoreWorkerFacade } from './firestore-worker.facade';

import { firestoreWorkerQuery } from './firestore-worker.selectors';
import {
  LoadFirestoreWorker,
  FirestoreWorkerLoaded
} from './firestore-worker.actions';
import {
  FirestoreWorkerState,
  Entity,
  initialState,
  firestoreWorkerReducer
} from './firestore-worker.reducer';

interface TestSchema {
  firestoreWorker: FirestoreWorkerState;
}

describe('FirestoreWorkerFacade', () => {
  let facade: FirestoreWorkerFacade;
  let store: Store<TestSchema>;
  let createFirestoreWorker;

  beforeEach(() => {
    createFirestoreWorker = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature('firestoreWorker', firestoreWorkerReducer, {
            initialState
          }),
          EffectsModule.forFeature([FirestoreWorkerEffects])
        ],
        providers: [FirestoreWorkerFacade]
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
      facade = TestBed.get(FirestoreWorkerFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async done => {
      try {
        let list = await readFirst(facade.allFirestoreWorker$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.loadAll();

        list = await readFirst(facade.allFirestoreWorker$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `FirestoreWorkerLoaded` to manually submit list for state management
     */
    it('allFirestoreWorker$ should return the loaded list; and loaded flag == true', async done => {
      try {
        let list = await readFirst(facade.allFirestoreWorker$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        store.dispatch(
          new FirestoreWorkerLoaded([
            createFirestoreWorker('AAA'),
            createFirestoreWorker('BBB')
          ])
        );

        list = await readFirst(facade.allFirestoreWorker$);
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
