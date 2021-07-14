import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs';
import { TransaccionService } from '../services/transaccion.service';
import { GraphicsComponent } from './graphics.component';
import { AngularFireDatabase } from '@angular/fire/database';

// [{
//   aplicacionSeleccionada: {
//       idAplicacion: string;
//       key: string;
//       nombreAplicacion: string;
//       torreValor: string;
//       usuarioResponsable: string;
//   };
//   torreValor: string;
//   transaccionValor: string;
// } ]

let mockDataTransaccion= [
  {
    "aplicacionSeleccionada" : {
      "idAplicacion" : "",
      "key" : "-MbEts8E8sqFZMDXoQgV",
      "nombreAplicacion" : "SISACT_EXPRESS",
      "torreValor" : "VENTAS",
      "usuarioResponsable" : "SIRLY GOMEZ"
    },
    "torreValor" : "LEGADOS",
    "transaccionValor" : "ALTA CLIENTE"
  },
  {
    "aplicacionSeleccionada" : {
      "idAplicacion" : "",
      "key" : "-MaGQT8sip-vFpvJaWyz",
      "nombreAplicacion" : "SIACPOSTPAGO",
      "torreValor" : "POSTVENTA",
      "usuarioResponsable" : "EDITH LAVADO"
    },
    "torreValor" : "LEGADOS",
    "transaccionValor" : "PETICIONES"
  }
]

let angularFireDatabaseStub = { list: () => {} };
let mockTodos$ = of(mockDataTransaccion);

describe('GraphicsComponent', () => {
  let component: GraphicsComponent;
  let fixture: ComponentFixture<GraphicsComponent>;

  beforeEach(async(() => {
    // spyOn(angularFireDatabaseStub, 'list').and.returnValue(mockTodos$);
    const spy = jasmine.createSpyObj('AngularFireDatabase', ['getValue']);
    let transaccionService: TransaccionService;

    TestBed.configureTestingModule({
      // declarations: [ GraphicsComponent ],
      providers: [
        GraphicsComponent,
        { provide: TransaccionService, useClass: MockUserService }
        // { provide: AngularFireDatabase, useValue: angularFireDatabaseStub }
      ]
    });
    component = TestBed.inject(GraphicsComponent);
    transaccionService=TestBed.inject(TransaccionService);
  }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(GraphicsComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

class MockUserService {
  isLoggedIn = true;
  user = { name: 'Test User'};
}
