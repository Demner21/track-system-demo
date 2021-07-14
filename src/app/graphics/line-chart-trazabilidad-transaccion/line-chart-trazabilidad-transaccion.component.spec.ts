import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TrazabiliadService } from 'src/app/services/trazabilidad.service';

import { LineChartTrazabilidadTransaccionComponent } from './line-chart-trazabilidad-transaccion.component';

describe('LineChartTrazabilidadTransaccionComponent', () => {
  let component: LineChartTrazabilidadTransaccionComponent;
  let fixture: ComponentFixture<LineChartTrazabilidadTransaccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineChartTrazabilidadTransaccionComponent ],
      providers:[
        LineChartTrazabilidadTransaccionComponent,
        {provide :TrazabiliadService , useClass: TrazabiliadServiceMock}
      ]
    })
    .compileComponents();
    component = TestBed.inject(LineChartTrazabilidadTransaccionComponent);
  }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(LineChartTrazabilidadTransaccionComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
export class TrazabiliadServiceMock {}