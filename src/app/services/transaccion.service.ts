import { Transaccion } from './../transaccion/transaccion.model';

export class TransaccionService{
  listaTransacciones:Transaccion[]=[
    new Transaccion('SISACT','VENTA','Cambio Titularidad')
  ];

  registrarTransaccion(transaccionData:Transaccion){
    this.listaTransacciones.push(transaccionData);
  }
}
