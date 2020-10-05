import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import {Transaccion} from '../transaccion.model';

@Component({
  selector: 'app-registrar-transaccion',
  templateUrl: './registrar-transaccion.component.html',
  styleUrls: ['./registrar-transaccion.component.css']
})
export class RegistrarTransaccionComponent implements OnInit {


  @Output() transaccionCreada = new EventEmitter<Transaccion>();

  aplicacionSeleccionada='';
  torreValor:string='';
  transaccionValor:string='';

  listAplicaciones=[
    {value:'1', nombreAplicacion:'SIAC UNICO'},
    {value:'2', nombreAplicacion:'SISACT'},
    {value:'3', nombreAplicacion:'SIGEX'},
    {value:'4', nombreAplicacion:'STEAM'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onCrearTransaccion(){

    if (this.aplicacionSeleccionada==='' || this.torreValor===''
    || this.transaccionValor==='') {
      return;
    }

    this.transaccionCreada.emit(
      new Transaccion(this.aplicacionSeleccionada,this.torreValor,this.transaccionValor)
    );

    this.aplicacionSeleccionada='';
    this.torreValor='';
    this.transaccionValor='';
  }

}
