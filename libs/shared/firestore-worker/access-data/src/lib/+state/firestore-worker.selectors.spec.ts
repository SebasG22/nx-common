import { Entity, FirestoreWorkerState } from './firestore-worker.reducer';
import { firestoreWorkerQuery } from './firestore-worker.selectors';

describe('FirestoreWorker Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getFirestoreWorkerId = it => it['id'];

  let storeState;

  beforeEach(() => {
    const createFirestoreWorker = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
    storeState = {
      firestoreWorker: {
        list: [
          createFirestoreWorker('PRODUCT-AAA'),
          createFirestoreWorker('PRODUCT-BBB'),
          createFirestoreWorker('PRODUCT-CCC')
        ],
        selectedId: 'PRODUCT-BBB',
        error: ERROR_MSG,
        loaded: true
      }
    };
  });

  describe('FirestoreWorker Selectors', () => {
    it('getAllFirestoreWorker() should return the list of FirestoreWorker', () => {
      const results = firestoreWorkerQuery.getAllFirestoreWorker(storeState);
      const selId = getFirestoreWorkerId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelectedFirestoreWorker() should return the selected Entity', () => {
      const result = firestoreWorkerQuery.getSelectedFirestoreWorker(
        storeState
      );
      const selId = getFirestoreWorkerId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getLoaded() should return the current 'loaded' status", () => {
      const result = firestoreWorkerQuery.getLoaded(storeState);

      expect(result).toBe(true);
    });

    it("getError() should return the current 'error' storeState", () => {
      const result = firestoreWorkerQuery.getError(storeState);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
