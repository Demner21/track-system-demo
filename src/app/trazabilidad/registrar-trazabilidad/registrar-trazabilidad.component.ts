import { Component, OnInit } from '@angular/core';
import { SupplierDataService } from 'src/app/services/supplier.data.service';

@Component({
  selector: 'app-registrar-trazabilidad',
  templateUrl: './registrar-trazabilidad.component.html',
  styleUrls: ['./registrar-trazabilidad.component.css']
})
export class RegistrarTrazabilidadComponent implements OnInit {
  selectedValue='';

  listAplicaciones=[];
  constructor(private supplierDataService:SupplierDataService) { }

  ngOnInit(): void {
    this.listAplicaciones=this.supplierDataService.listAplicaciones;
  }

}
