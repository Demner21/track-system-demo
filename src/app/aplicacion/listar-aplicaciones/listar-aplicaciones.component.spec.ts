import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AplicacionService } from 'src/app/services/aplicacion.service';

import { ListarAplicacionesComponent } from './listar-aplicaciones.component';

describe('ListarAplicacionesComponent', () => {
  let component: ListarAplicacionesComponent;
  let fixture: ComponentFixture<ListarAplicacionesComponent>;
  let aplicacionService: AplicacionService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarAplicacionesComponent ],
      providers:[
        ListarAplicacionesComponent,
        { provide: AplicacionService, useClass: AplicacionServiceMock }
      ]
    });
    // .compileComponents();
    component = TestBed.inject(ListarAplicacionesComponent);
    aplicacionService=TestBed.inject( AplicacionService);
  }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(ListarAplicacionesComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  //   aplicacionService=TestBed.inject( AplicacionService);
  // });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});

export class AplicacionServiceMock {}