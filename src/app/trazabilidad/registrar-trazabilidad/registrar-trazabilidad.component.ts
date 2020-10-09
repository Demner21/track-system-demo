import { Component, OnInit } from '@angular/core';
import { SupplierDataService } from 'src/app/services/supplier.data.service';
import { TransaccionService } from 'src/app/services/transaccion.service';
import { TrazabiliadService } from 'src/app/services/trazabilidad.service';
import { Transaccion } from 'src/app/transaccion/transaccion.model';
import { Trazabilidad } from '../trazabilidad.model';

@Component({
  selector: 'app-registrar-trazabilidad',
  templateUrl: './registrar-trazabilidad.component.html',
  styleUrls: ['./registrar-trazabilidad.component.css']
})
export class RegistrarTrazabilidadComponent implements OnInit {
  nombreAplicacion='';
  codigoProyecto='';
  torreValor='';
  descripcionProyecto='';
  transaccionSeleccionada='';
  descripcionCambioTransaccion='';

  listaTransacciones:Transaccion[]=[];
  listAplicaciones=[];
  constructor(private supplierDataService: SupplierDataService,
              private transaccionService: TransaccionService,
              private trazabilidadService: TrazabiliadService) { }

  ngOnInit(): void {
    this.listAplicaciones=this.supplierDataService.listAplicaciones;
    this.listaTransacciones=this.transaccionService.listaTransacciones;
  }
  onCreateTrazabilidad() :void{
    this.trazabilidadService.crearTrazabilidad(
      new Trazabilidad(
        this.nombreAplicacion, this.transaccionSeleccionada,this.torreValor,
        {codigo:this.codigoProyecto, descripcion:this.descripcionProyecto},null)
    );
  }
}
