import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AplicacionService } from 'src/app/services/aplicacion.service';
import { TransaccionService } from 'src/app/services/transaccion.service';

import { ListarTransaccionesComponent } from './listar-transacciones.component';

describe('ListarTransaccionesComponent', () => {
  let component: ListarTransaccionesComponent;
  let fixture: ComponentFixture<ListarTransaccionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarTransaccionesComponent ],
      providers:[
        ListarTransaccionesComponent,
        {provide :TransaccionService , useClass: TransaccionServiceMock},
        {provide :AplicacionService , useClass: AplicacionServiceMock}
      ]
    })
    .compileComponents();
    component = TestBed.inject(ListarTransaccionesComponent);
  }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(ListarTransaccionesComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
export class TransaccionServiceMock {}
export class AplicacionServiceMock {}