import { Component, OnInit } from '@angular/core';
import { TransaccionService } from 'src/app/services/transaccion.service';

import {Transaccion} from '../transaccion.model';

@Component({
  selector: 'app-registrar-transaccion',
  templateUrl: './registrar-transaccion.component.html',
  styleUrls: ['./registrar-transaccion.component.css']
})
export class RegistrarTransaccionComponent implements OnInit {

  aplicacionSeleccionada:string='';
  torreValor:string='';
  transaccionValor:string='';

  listAplicaciones=[
    {value:'1', nombreAplicacion:'SIAC UNICO'},
    {value:'2', nombreAplicacion:'SISACT'},
    {value:'3', nombreAplicacion:'SIGEX'},
    {value:'4', nombreAplicacion:'STEAM'},
  ];

  constructor(private registrarTransaccionService:TransaccionService) { }

  ngOnInit(): void {
  }

  onCrearTransaccion(){

    this.registrarTransaccionService.registrarTransaccion(
      new Transaccion(this.aplicacionSeleccionada,this.torreValor,this.transaccionValor));

    this.cleanVariables();
  }


  private cleanVariables(): void {
    this.aplicacionSeleccionada = '';
    this.torreValor = '';
    this.transaccionValor = '';
  }
}
