import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  FIRESTOREWORKER_FEATURE_KEY,
  FirestoreWorkerState
} from './firestore-worker.reducer';

// Lookup the 'FirestoreWorker' feature state managed by NgRx
const getFirestoreWorkerState = createFeatureSelector<FirestoreWorkerState>(
  FIRESTOREWORKER_FEATURE_KEY
);

const getLoaded = createSelector(
  getFirestoreWorkerState,
  (state: FirestoreWorkerState) => state.loaded
);
const getError = createSelector(
  getFirestoreWorkerState,
  (state: FirestoreWorkerState) => state.error
);

const getAllFirestoreWorker = createSelector(
  getFirestoreWorkerState,
  getLoaded,
  (state: FirestoreWorkerState, isLoaded) => {
    return isLoaded ? state.list : [];
  }
);
const getSelectedId = createSelector(
  getFirestoreWorkerState,
  (state: FirestoreWorkerState) => state.selectedId
);
const getSelectedFirestoreWorker = createSelector(
  getAllFirestoreWorker,
  getSelectedId,
  (firestoreWorker, id) => {
    const result = firestoreWorker.find(it => it['id'] === id);
    return result ? Object.assign({}, result) : undefined;
  }
);

export const firestoreWorkerQuery = {
  getLoaded,
  getError,
  getAllFirestoreWorker,
  getSelectedFirestoreWorker
};
