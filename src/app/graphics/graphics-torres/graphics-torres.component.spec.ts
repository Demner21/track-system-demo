import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TransaccionService } from 'src/app/services/transaccion.service';

import { GraphicsTorresComponent } from './graphics-torres.component';

describe('GraphicsTorresComponent', () => {
  let component: GraphicsTorresComponent;
  let fixture: ComponentFixture<GraphicsTorresComponent>;
  let transaccionService: TransaccionService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      // declarations: [ GraphicsTorresComponent ]
      providers:[
        GraphicsTorresComponent,
        { provide: TransaccionService, useClass: MockUserService }
      ]
    });
    component = TestBed.inject(GraphicsTorresComponent);
    transaccionService=TestBed.inject(TransaccionService);
  }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(GraphicsTorresComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
class MockUserService {
}