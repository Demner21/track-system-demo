import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireStorage } from '@angular/fire/storage';

import { GetFileComponentComponent } from './get-file-component.component';

describe('GetFileComponentComponent', () => {
  let component: GetFileComponentComponent;
  let fixture: ComponentFixture<GetFileComponentComponent>;
  let fireStorageMock: AngularFireStorage;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers:[
        GetFileComponentComponent,
        {provide :AngularFireStorage , useClass: AngularFireStorageMock},
      ]
    });
    component = TestBed.inject(GetFileComponentComponent);
    fireStorageMock = TestBed.inject(AngularFireStorage);
  }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(GetFileComponentComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  it('componente no es usado ', () => {
    expect(component).toBeTruthy();
  });
});
export class AngularFireStorageMock {
  ref(){ return { getDownloadURL() {return ''}}}
}