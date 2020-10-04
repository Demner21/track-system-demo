import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrar-trazabilidad',
  templateUrl: './registrar-trazabilidad.component.html',
  styleUrls: ['./registrar-trazabilidad.component.css']
})
export class RegistrarTrazabilidadComponent implements OnInit {
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
