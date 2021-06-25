import { TestBed } from '@angular/core/testing';
import { AngularFireDatabase } from '@angular/fire/database';

import { InsumoService } from './insumo.service';

describe('InsumoService', () => {
  let service: InsumoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[
        InsumoService,
        {provide :AngularFireDatabase , useClass: AngularFireDatabaseMock},
      ]
    });
    service = TestBed.inject(InsumoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
export class AngularFireDatabaseMock{
  list(){return []}
}