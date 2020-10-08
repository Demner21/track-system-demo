import { Trazabiliad } from './../trazabilidad.model';
import { Component, OnInit } from '@angular/core';

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

  listAplicaciones=[
    {value:'1', nombreAplicacion:'SIAC UNICO'},
    {value:'2', nombreAplicacion:'SISACT'},
    {value:'3', nombreAplicacion:'SIGEX'},
    {value:'4', nombreAplicacion:'STEAM'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
