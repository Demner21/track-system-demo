import { Component, OnInit } from '@angular/core';
import { SupplierDataService } from 'src/app/services/supplier.data.service';
import { TransaccionService } from 'src/app/services/transaccion.service';

@Component({
  selector: 'app-registrar-insumos',
  templateUrl: './registrar-insumos.component.html',
  styleUrls: ['./registrar-insumos.component.css']
})
export class RegistrarInsumosComponent implements OnInit {
  nombreAplicacion:string='';
  codigoProyecto:string='';
  transaccionSeleccionada:string='';
  tipoComponenteSeleccionado:string='';
  listaTipoComponentes=['STORE PROCEDURE', 'WEB SERVICE'];

  constructor(private supplierData:SupplierDataService,
              private transaccionService:TransaccionService) { }
  listAplicaciones=[];
  listaTransacciones=[];
  ngOnInit(): void {
    this.listAplicaciones=this.supplierData.listAplicaciones;
    this.listaTransacciones=this.transaccionService.listaTransacciones;
  }
  onAgregarTrazabilidadInsumo(){

  }
}
