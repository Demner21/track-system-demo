import { Trazabiliad } from './../trazabilidad.model';
import { Component, OnInit } from '@angular/core';
import { SupplierDataService } from 'src/app/services/supplier.data.service';

@Component({
  selector: 'app-listar-trazabilidades',
  templateUrl: './listar-trazabilidades.component.html',
  styleUrls: ['./listar-trazabilidades.component.css']
})
export class ListarTrazabilidadesComponent implements OnInit {
  listaTranzabilidades: Trazabiliad[]=[
    new Trazabiliad('11','Migración de plan','VENTA',{codigo:'123', descripcion:'test proyecto'},null)
  ];
  selectedValue='';

  listAplicaciones=[];

  constructor(private supplierDataService:SupplierDataService) { }

  ngOnInit(): void {
    this.listAplicaciones=this.supplierDataService.listAplicaciones;
  }

}
