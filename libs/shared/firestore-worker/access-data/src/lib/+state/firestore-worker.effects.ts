import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';

import { FirestoreWorkerPartialState } from './firestore-worker.reducer';
import {
  LoadFirestoreWorker,
  FirestoreWorkerLoaded,
  FirestoreWorkerLoadError,
  FirestoreWorkerActionTypes
} from './firestore-worker.actions';

@Injectable()
export class FirestoreWorkerEffects {
  @Effect() loadFirestoreWorker$ = this.dataPersistence.fetch(
    FirestoreWorkerActionTypes.LoadFirestoreWorker,
    {
      run: (
        action: LoadFirestoreWorker,
        state: FirestoreWorkerPartialState
      ) => {
        // Your custom REST 'load' logic goes here. For now just return an empty list...
        return new FirestoreWorkerLoaded([]);
      },

      onError: (action: LoadFirestoreWorker, error) => {
        console.error('Error', error);
        return new FirestoreWorkerLoadError(error);
      }
    }
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<FirestoreWorkerPartialState>
  ) {}
}
