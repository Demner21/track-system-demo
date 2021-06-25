import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { Aplicacion } from '../model/aplicacion.model';
import { AplicacionService } from '../services/aplicacion.service';

import { AplicacionComponent } from './aplicacion.component';

describe('AplicacionComponent', () => {
  let component: AplicacionComponent;
  let apliacionService: AplicacionService;
  let fixture: ComponentFixture<AplicacionComponent>;
  let aplicacionSpy: { list: jasmine.Spy };
  let aplicacionServiceSpy:any;
  beforeEach(
    async( () => {
    
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

     aplicacionServiceSpy = jasmine.createSpyObj('AplicacionService', ['getAll']);
     aplicacionServiceSpy.getAll.and.returnValue(of(expectedData));

    TestBed.configureTestingModule({
      // imports: [FormsModule ],
      declarations: [ AplicacionComponent ],
      providers:[
        // AplicacionComponent,
        { provide: AplicacionService, useValue: aplicacionServiceSpy }
      ]
    }).compileComponents();
    // fixture = TestBed.createComponent(AplicacionComponent);
    // component = fixture.componentInstance

    // component = TestBed.inject(AplicacionComponent);
    //apliacionService=TestBed.inject(AplicacionService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AplicacionComponent);
    component = fixture.componentInstance; // FormComponent test instance
  }); 

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('componente Aplicacion isLoading debe ser falso al crearse', () => {
    expect(component.isLoading).toBe(false);
  });

  it('componente Aplicacion isLoadingSucces debe ser falso al crearse', () => {
    expect(component.isLoadingSucces).toBe(false);
  });

  it('componente Aplicacion errorMessage debe ser null al crearse', () => {
    expect(component.errorMessage).toBe(null);
  });
  it('componente Aplicacion successMessage debe ser null al crearse', () => {
    expect(component.successMessage).toBe(null);
  });

  it('should update the favorite color on the input field', fakeAsync(() => {
    component.aplicacion.nombreAplicacion = 'Fake App';
    fixture.detectChanges();
    tick();
    component.changeAndSetData();
    const input = fixture.nativeElement.querySelector('aplicacionNombre');
    expect(component.isLoading).toEqual(true);
    expect(input.value).toBe('Fake App');
  }));
  
});


class MockUserService {
}
