import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AplicacionService } from 'src/app/services/aplicacion.service';
import { InsumoService } from 'src/app/services/insumo.service';
import { TransaccionService } from 'src/app/services/transaccion.service';

import { RegistrarInsumosComponent } from './registrar-insumos.component';

describe('RegistrarInsumosComponent', () => {
  let component: RegistrarInsumosComponent;
  let fixture: ComponentFixture<RegistrarInsumosComponent>;
  let transaccionServiceMock: TransaccionService;
  let insumoServiceMock: InsumoService;
  let aplicacionServiceMock: AplicacionService;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarInsumosComponent ],
      providers:[
        RegistrarInsumosComponent,
        {provide :TransaccionService , useClass: TransaccionServiceMock},
        {provide :InsumoService , useClass: InsumoServiceMock},
        {provide :AplicacionService , useClass: AplicacionServiceMock},
      ]
    });

    component =TestBed.inject(RegistrarInsumosComponent);
    transaccionServiceMock = TestBed.inject(TransaccionService);
    insumoServiceMock = TestBed.inject(InsumoService);
    aplicacionServiceMock = TestBed.inject(AplicacionService);

  }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(RegistrarInsumosComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
export class TransaccionServiceMock {}
export class InsumoServiceMock {}
export class AplicacionServiceMock {}