import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireStorage } from '@angular/fire/storage';
import { AplicacionService } from 'src/app/services/aplicacion.service';
import { TransaccionService } from 'src/app/services/transaccion.service';
import { TrazabiliadService } from 'src/app/services/trazabilidad.service';
import { UploadService } from 'src/app/services/upload.service';

import { RegistrarTrazabilidadComponent } from './registrar-trazabilidad.component';

describe('RegistrarTrazabilidadComponent', () => {
  let component: RegistrarTrazabilidadComponent;
  let fixture: ComponentFixture<RegistrarTrazabilidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarTrazabilidadComponent ],
      providers:[
        RegistrarTrazabilidadComponent,
        {provide :TransaccionService , useClass: TransaccionServiceMock},
        {provide :TrazabiliadService , useClass: TrazabiliadServiceMock},
        {provide :UploadService , useClass: UploadServiceMock},
        {provide :AngularFireStorage , useClass: AngularFireStorageMock},
        {provide :AplicacionService , useClass: AplicacionServiceMock},
      ]
    });

    component =TestBed.inject(RegistrarTrazabilidadComponent);
  }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(RegistrarTrazabilidadComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
export class TransaccionServiceMock {}
export class TrazabiliadServiceMock {}
export class UploadServiceMock {}
export class AngularFireStorageMock {}
export class AplicacionServiceMock {}