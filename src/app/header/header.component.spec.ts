import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AutenticadorService } from '../services/autenticador.service';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let authService: AutenticadorService;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      // declarations: [ HeaderComponent ],
      providers: [
        HeaderComponent,
        { provide: AutenticadorService, useClass: MockUserService }
      ]
    });
    component = TestBed.inject(HeaderComponent);
    //authService=TestBed.inject(AutenticadorService);
  }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(HeaderComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(HeaderComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement;
  //   expect(compiled.querySelector('.navbar-brand').textContent).toContain('track-system-demo app is running!');
  // });
});

class MockUserService {
  isLoggedIn = true;
  user = { name: 'Test User'};
}
