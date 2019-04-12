import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  FIRESTOREWORKER_FEATURE_KEY,
  initialState as firestoreWorkerInitialState,
  firestoreWorkerReducer
} from './+state/firestore-worker.reducer';
import { FirestoreWorkerEffects } from './+state/firestore-worker.effects';
import { FirestoreWorkerFacade } from './+state/firestore-worker.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      FIRESTOREWORKER_FEATURE_KEY,
      firestoreWorkerReducer,
      { initialState: firestoreWorkerInitialState }
    ),
    EffectsModule.forFeature([FirestoreWorkerEffects])
  ],
  providers: [FirestoreWorkerFacade]
})
export class SharedFirestoreWorkerAccessDataModule {}
