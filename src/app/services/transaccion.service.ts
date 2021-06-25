import { Injectable } from '@angular/core';
import { Transaccion } from './../transaccion/transaccion.model';
import { AngularFireDatabase, AngularFireList, SnapshotAction } from '@angular/fire/database';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TransaccionService {

  private dbPath: string = 'listaTransacciones';
  listaTransacciones: AngularFireList<Transaccion> = null;
  //listaTransacciones: Observable<Transaccion []> = null;

  registrarTransaccion(transaccionData: Transaccion) {
    this.listaTransacciones.push(transaccionData);
  }

  constructor(private db: AngularFireDatabase) {
    this.listaTransacciones = db.list(this.dbPath);
  }

  getAll() :AngularFireList<Transaccion> {
    return this.listaTransacciones;
  }

  // getAll_AnotherForm(): Observable<Transaccion[]> {
  //   return this.db.list(this.dbPath)
  //   .snapshotChanges()
  //   .pipe( map(arr => {return arr.map(t => new Transaccion(t.text,t.text,t.text));}));
  // }
} 
