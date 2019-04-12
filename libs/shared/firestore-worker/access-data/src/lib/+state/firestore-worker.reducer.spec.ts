import { FirestoreWorkerLoaded } from './firestore-worker.actions';
import {
  FirestoreWorkerState,
  Entity,
  initialState,
  firestoreWorkerReducer
} from './firestore-worker.reducer';

describe('FirestoreWorker Reducer', () => {
  const getFirestoreWorkerId = it => it['id'];
  let createFirestoreWorker;

  beforeEach(() => {
    createFirestoreWorker = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('valid FirestoreWorker actions ', () => {
    it('should return set the list of known FirestoreWorker', () => {
      const firestoreWorkers = [
        createFirestoreWorker('PRODUCT-AAA'),
        createFirestoreWorker('PRODUCT-zzz')
      ];
      const action = new FirestoreWorkerLoaded(firestoreWorkers);
      const result: FirestoreWorkerState = firestoreWorkerReducer(
        initialState,
        action
      );
      const selId: string = getFirestoreWorkerId(result.list[1]);

      expect(result.loaded).toBe(true);
      expect(result.list.length).toBe(2);
      expect(selId).toBe('PRODUCT-zzz');
    });
  });

  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;
      const result = firestoreWorkerReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
