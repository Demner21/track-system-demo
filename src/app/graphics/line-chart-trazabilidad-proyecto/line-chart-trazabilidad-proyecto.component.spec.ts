import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TransaccionService } from 'src/app/services/transaccion.service';
import { TrazabiliadService } from 'src/app/services/trazabilidad.service';

import { LineChartTrazabilidadProyectoComponent } from './line-chart-trazabilidad-proyecto.component';

describe('LineChartTrazabilidadProyectoComponent', () => {
  let component: LineChartTrazabilidadProyectoComponent;
  let fixture: ComponentFixture<LineChartTrazabilidadProyectoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineChartTrazabilidadProyectoComponent ],
      providers:[
        LineChartTrazabilidadProyectoComponent,
        {provide :TransaccionService , useClass: TransaccionServiceMock},
        {provide :TrazabiliadService , useClass: TrazabiliadServiceMock}
      ]
    })
    .compileComponents();
    component = TestBed.inject(LineChartTrazabilidadProyectoComponent);
  }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(LineChartTrazabilidadProyectoComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
export class TransaccionServiceMock {}
export class TrazabiliadServiceMock {}