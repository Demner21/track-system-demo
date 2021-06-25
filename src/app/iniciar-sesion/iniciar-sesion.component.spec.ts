import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AutenticadorService } from '../services/autenticador.service';

import { IniciarSesionComponent } from './iniciar-sesion.component';

describe('IniciarSesionComponent', () => {
  let component: IniciarSesionComponent;
  let fixture: ComponentFixture<IniciarSesionComponent>;
  let autService:AutenticadorService;
  let routerMock:Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      // declarations: [ IniciarSesionComponent ],
      providers:[
        IniciarSesionComponent,
        {provide:AutenticadorService , useClass:AutenticadorServiceMock},
        {provide:Router , useClass:RouterMock}
      ]
    });
    component = TestBed.inject(IniciarSesionComponent);
    autService= TestBed.inject(AutenticadorService);
    routerMock= TestBed.inject(Router);
  }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(IniciarSesionComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
export class AutenticadorServiceMock {}
export class RouterMock {}