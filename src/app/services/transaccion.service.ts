import { Injectable } from '@angular/core';
import { Transaccion } from './../transaccion/transaccion.model';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TransaccionService{

  private dbPath: string= 'listaTransacciones';
  listaTransacciones: AngularFireList<Transaccion> = null;

  registrarTransaccion(transaccionData:Transaccion){
    this.listaTransacciones.push(transaccionData);
  }

  constructor(private db: AngularFireDatabase){
    this.listaTransacciones=db.list(this.dbPath);
  }

  getAll(){
    return this.listaTransacciones;
  }

}
