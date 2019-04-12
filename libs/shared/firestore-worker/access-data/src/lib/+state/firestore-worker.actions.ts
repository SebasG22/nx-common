import { Action } from '@ngrx/store';
import { Entity } from './firestore-worker.reducer';

export enum FirestoreWorkerActionTypes {
  LoadFirestoreWorker = '[FirestoreWorker] Load FirestoreWorker',
  FirestoreWorkerLoaded = '[FirestoreWorker] FirestoreWorker Loaded',
  FirestoreWorkerLoadError = '[FirestoreWorker] FirestoreWorker Load Error'
}

export class LoadFirestoreWorker implements Action {
  readonly type = FirestoreWorkerActionTypes.LoadFirestoreWorker;
}

export class FirestoreWorkerLoadError implements Action {
  readonly type = FirestoreWorkerActionTypes.FirestoreWorkerLoadError;
  constructor(public payload: any) {}
}

export class FirestoreWorkerLoaded implements Action {
  readonly type = FirestoreWorkerActionTypes.FirestoreWorkerLoaded;
  constructor(public payload: Entity[]) {}
}

export type FirestoreWorkerAction =
  | LoadFirestoreWorker
  | FirestoreWorkerLoaded
  | FirestoreWorkerLoadError;

export const fromFirestoreWorkerActions = {
  LoadFirestoreWorker,
  FirestoreWorkerLoaded,
  FirestoreWorkerLoadError
};
