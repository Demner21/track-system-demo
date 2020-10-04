import { Component } from '@angular/core';
import{ Transaccion} from './transaccion/transaccion.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listaTransacciones:Transaccion[]=[
    new Transaccion('SISACT','VENTA','123')
  ];

  ngOnInit(): void {}

  onTransaccionRegistrada(transaccionData:Transaccion){
    this.listaTransacciones.push(transaccionData);
  }
}
