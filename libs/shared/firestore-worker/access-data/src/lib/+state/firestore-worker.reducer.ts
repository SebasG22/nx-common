import {
  FirestoreWorkerAction,
  FirestoreWorkerActionTypes
} from './firestore-worker.actions';

export const FIRESTOREWORKER_FEATURE_KEY = 'firestoreWorker';

/**
 * Interface for the 'FirestoreWorker' data used in
 *  - FirestoreWorkerState, and
 *  - firestoreWorkerReducer
 *
 *  Note: replace if already defined in another module
 */

/* tslint:disable:no-empty-interface */
export interface Entity {}

export interface FirestoreWorkerState {
  list: Entity[]; // list of FirestoreWorker; analogous to a sql normalized table
  selectedId?: string | number; // which FirestoreWorker record has been selected
  loaded: boolean; // has the FirestoreWorker list been loaded
  error?: any; // last none error (if any)
}

export interface FirestoreWorkerPartialState {
  readonly [FIRESTOREWORKER_FEATURE_KEY]: FirestoreWorkerState;
}

export const initialState: FirestoreWorkerState = {
  list: [],
  loaded: false
};

export function firestoreWorkerReducer(
  state: FirestoreWorkerState = initialState,
  action: FirestoreWorkerAction
): FirestoreWorkerState {
  switch (action.type) {
    case FirestoreWorkerActionTypes.FirestoreWorkerLoaded: {
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
