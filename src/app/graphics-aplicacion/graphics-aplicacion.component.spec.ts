import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TransaccionService } from '../services/transaccion.service';

import { GraphicsAplicacionComponent } from './graphics-aplicacion.component';

describe('GraphicsAplicacionComponent', () => {
  let component: GraphicsAplicacionComponent;
  let fixture: ComponentFixture<GraphicsAplicacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphicsAplicacionComponent ],
      providers:[
        GraphicsAplicacionComponent,
        {provide :TransaccionService , useClass: TransaccionServiceMock}
      ]
    })
    .compileComponents();
    component = TestBed.inject(GraphicsAplicacionComponent);
  }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(GraphicsAplicacionComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
export class TransaccionServiceMock {}