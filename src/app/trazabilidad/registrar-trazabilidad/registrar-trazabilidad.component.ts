import { Component, OnInit } from '@angular/core';
import { SupplierDataService } from 'src/app/services/supplier.data.service';
import { TransaccionService } from 'src/app/services/transaccion.service';
import { Transaccion } from 'src/app/transaccion/transaccion.model';

@Component({
  selector: 'app-registrar-trazabilidad',
  templateUrl: './registrar-trazabilidad.component.html',
  styleUrls: ['./registrar-trazabilidad.component.css']
})
export class RegistrarTrazabilidadComponent implements OnInit {
  selectedValue='';
  transaccionSeleccionada='';

  listaTransacciones:Transaccion[]=[];
  listAplicaciones=[];
  constructor(private supplierDataService:SupplierDataService,
              private transaccionService: TransaccionService) { }

  ngOnInit(): void {
    this.listAplicaciones=this.supplierDataService.listAplicaciones;
    this.listaTransacciones=this.transaccionService.listaTransacciones;
  }

}
