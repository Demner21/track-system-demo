import { Component, OnInit } from '@angular/core';
import { TransaccionService } from 'src/app/services/transaccion.service';
import { Transaccion } from '../transaccion.model';

@Component({
  selector: 'app-listar-transacciones',
  templateUrl: './listar-transacciones.component.html',
  styleUrls: ['./listar-transacciones.component.css']
})
export class ListarTransaccionesComponent implements OnInit {
  featurePage: string;
  listaTransacciones:Transaccion[];

  constructor(private transaccionService:TransaccionService ) { }

  ngOnInit(): void {
    this.listaTransacciones= this.transaccionService.listaTransacciones;
  }

}
