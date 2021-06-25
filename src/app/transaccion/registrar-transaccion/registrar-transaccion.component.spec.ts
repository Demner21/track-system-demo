import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AplicacionService } from 'src/app/services/aplicacion.service';
import { TransaccionService } from 'src/app/services/transaccion.service';

import { RegistrarTransaccionComponent } from './registrar-transaccion.component';

describe('RegistrarTransaccionComponent', () => {
  let component: RegistrarTransaccionComponent;
  let fixture: ComponentFixture<RegistrarTransaccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarTransaccionComponent ],
      providers:[
        RegistrarTransaccionComponent,
        {provide :TransaccionService , useClass: TransaccionServiceMock},
        {provide :AplicacionService , useClass: AplicacionServiceMock}
      ]
    })
    .compileComponents();

    component =TestBed.inject(RegistrarTransaccionComponent);
  }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(RegistrarTransaccionComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
export class TransaccionServiceMock {}
export class AplicacionServiceMock {}