import { Trazabilidad } from './../trazabilidad.model';
import { Component, OnInit } from '@angular/core';
import { SupplierDataService } from 'src/app/services/supplier.data.service';
import { TrazabiliadService } from 'src/app/services/trazabilidad.service';
import { TransaccionService } from 'src/app/services/transaccion.service';
import { Transaccion } from 'src/app/transaccion/transaccion.model';

@Component({
  selector: 'app-listar-trazabilidades',
  templateUrl: './listar-trazabilidades.component.html',
  styleUrls: ['./listar-trazabilidades.component.css']
})
export class ListarTrazabilidadesComponent implements OnInit {
  listaTranzabilidades: Trazabilidad[]=[];
  selectedValue='';

  listAplicaciones:any;
  listaTransacciones:any;

  constructor(private supplierDataService:SupplierDataService,
              private trazabilidadService: TrazabiliadService,
              private transaccionService: TransaccionService) { }

  ngOnInit(): void {
    this.listAplicaciones=this.supplierDataService.listAplicaciones;
    this.listaTranzabilidades=this.trazabilidadService.listaTrazabilidades;
    this.listaTransacciones=this.transaccionService.listaTransacciones;
  }

}
