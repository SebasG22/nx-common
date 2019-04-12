import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { FirestoreWorkerPartialState } from './firestore-worker.reducer';
import { firestoreWorkerQuery } from './firestore-worker.selectors';
import { LoadFirestoreWorker } from './firestore-worker.actions';

@Injectable()
export class FirestoreWorkerFacade {
  loaded$ = this.store.pipe(select(firestoreWorkerQuery.getLoaded));
  allFirestoreWorker$ = this.store.pipe(
    select(firestoreWorkerQuery.getAllFirestoreWorker)
  );
  selectedFirestoreWorker$ = this.store.pipe(
    select(firestoreWorkerQuery.getSelectedFirestoreWorker)
  );

  constructor(private store: Store<FirestoreWorkerPartialState>) {}

  loadAll() {
    this.store.dispatch(new LoadFirestoreWorker());
  }
}
