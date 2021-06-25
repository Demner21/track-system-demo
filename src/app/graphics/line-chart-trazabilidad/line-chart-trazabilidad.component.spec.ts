import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TrazabiliadService } from 'src/app/services/trazabilidad.service';

import { LineChartTrazabilidadComponent } from './line-chart-trazabilidad.component';

describe('LineChartTrazabilidadComponent', () => {
  let component: LineChartTrazabilidadComponent;
  let fixture: ComponentFixture<LineChartTrazabilidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineChartTrazabilidadComponent ],
      providers:[
        LineChartTrazabilidadComponent,
        {provide :TrazabiliadService , useClass: TrazabiliadServiceMock}
      ]
    })
    .compileComponents();

    component = TestBed.inject(LineChartTrazabilidadComponent);
  }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(LineChartTrazabilidadComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
export class TrazabiliadServiceMock{}