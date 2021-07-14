import { TestBed } from '@angular/core/testing';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Aplicacion } from '../model/aplicacion.model';

import { AplicacionService } from './aplicacion.service';

describe('AplicacionService', () => {
  let service: AplicacionService;
  let aplicacionSpy: { list: jasmine.Spy };
  let angularFireDatabase: AngularFireDatabase;


  const expectedData :Aplicacion [] =[
    {
      idAplicacion : '1',
      nombreAplicacion : 'SIAC UNICO',
      torreValor : 'POSTVENTA',
      usuarioResponsable : 'VIRGINIA SOTELO'
    },
    {
      idAplicacion : '2',
      nombreAplicacion : 'SIAC UNICO 2',
      torreValor : 'POSTVENTA 2',
      usuarioResponsable : 'SOFIA LOZADA'
    }
  ];

    const collectionSpy = jasmine.createSpyObj({
      valueChanges: of(expectedData)
  })
  const afSpy = jasmine.createSpyObj('AngularFireDatabase', {
      collection: collectionSpy
  }); 

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[AplicacionService,
        // { provide: AngularFireDatabase, useValue: afSpy }
        { provide: AngularFireDatabase, useClass: AngularFireDatabaseMock }
      ]
    });
    service = TestBed.inject(AplicacionService);
    // service = TestBed.get(AplicacionService);
    angularFireDatabase=TestBed.inject(AngularFireDatabase);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should use ValueService', () => {
    let listaAplicaciones  = service.getAll();
    listaAplicaciones.snapshotChanges()
                     .subscribe(
                      data => {
                        expect(data.length).toEqual(expectedData.length);
                        // expect(data[0]).toEqual(expectedData[0]);
                      }
                    );
                     
    // expect(collectionSpy.valueChanges).toHaveBeenCalled();
    // expect(afSpy.collection).toHaveBeenCalledWith('listaAplicacion');
  });


});

export class AngularFireDatabaseMock {
  list(query: string): any {
      return {
        snapshotChanges() {
              return of([
                {
                  idAplicacion : '1',
                  nombreAplicacion : 'SIAC UNICO',
                  torreValor : 'POSTVENTA',
                  usuarioResponsable : 'VIRGINIA SOTELO'
                },
                {
                  idAplicacion : '2',
                  nombreAplicacion : 'SIAC UNICO 2',
                  torreValor : 'POSTVENTA 2',
                  usuarioResponsable : 'SOFIA LOZADA'
                }
              ])
          }
      }
  }
}
