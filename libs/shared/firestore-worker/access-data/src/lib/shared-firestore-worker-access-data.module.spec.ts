import { async, TestBed } from '@angular/core/testing';
import { SharedFirestoreWorkerAccessDataModule } from './shared-firestore-worker-access-data.module';

describe('SharedFirestoreWorkerAccessDataModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedFirestoreWorkerAccessDataModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedFirestoreWorkerAccessDataModule).toBeDefined();
  });
});
