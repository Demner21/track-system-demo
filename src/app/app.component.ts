import { Component } from '@angular/core';
import { TransaccionService } from './services/transaccion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  featurePage: string;

  ngOnInit(): void {}

  constructor(private transaccionService:TransaccionService){}

  loadPageFeaure(feature:string){
    this.featurePage=feature;
  }
}
