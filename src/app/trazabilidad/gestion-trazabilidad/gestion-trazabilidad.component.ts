import { Component, OnInit, ViewChild } from '@angular/core';
import { TransaccionService } from 'src/app/services/transaccion.service';
import { map } from 'rxjs/operators';
import { SupplierDataService } from 'src/app/services/supplier.data.service';
import { NgForm } from '@angular/forms';
import { TrazabiliadService } from 'src/app/services/trazabilidad.service';

@Component({
  selector: 'app-gestion-trazabilidad',
  templateUrl: './gestion-trazabilidad.component.html',
  styleUrls: ['./gestion-trazabilidad.component.css']
})
export class GestionTrazabilidadComponent implements OnInit {
  listaTrazabilidades = [];
  subListaTrazabilidades: any[];

  constructor(
    private supplierDataService: SupplierDataService,
    private transaccionService: TransaccionService,
    private trazabilidadService: TrazabiliadService) { }

  @ViewChild('form', { static: false }) gestionTrazabilidadForm: NgForm;

  ngOnInit(): void {
    this.listAplicaciones = this.supplierDataService.listAplicaciones;
    this.cargarListaTransacciones();
    this.trazabilidadService.getAll()
      .snapshotChanges()
      .pipe(map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() })))
      ).subscribe(
        data => {
          this.listaTrazabilidades = data;
        }
      );
  }

  listAplicaciones: any;
  listaTransacciones: any;

  trazabilidadSearch: {
    idAplicacion: string,
    codigoProyecto: string,
    transaccion: any
  } = { idAplicacion: '', codigoProyecto: '', transaccion: null };

  transaccionValor:any = null;
  idAplicacion: string;

  private cargarListaTransacciones() {
    this.transaccionService.getAll()
      .snapshotChanges()
      .pipe(map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() })))
      ).subscribe(
        data => {
          this.listaTransacciones = data;
        }
      );
  }

  onBuscarTrazabilidad() {
    this.trazabilidadSearch.idAplicacion = this.idAplicacion;
    this.trazabilidadSearch.codigoProyecto = this.gestionTrazabilidadForm.value.codProyecto;
    this.trazabilidadSearch.transaccion = this.transaccionValor==null ?{  }:this.transaccionValor;

    console.log(this.listaTrazabilidades);
    console.log( this.listaTransacciones)
    console.log( this.transaccionValor);
    console.log( this.trazabilidadSearch)
    
     this.subListaTrazabilidades = this.listaTrazabilidades
      .filter(traz => traz.aplicacion === this.trazabilidadSearch.idAplicacion 
                      && (traz.proyecto.codigo === this.trazabilidadSearch.codigoProyecto || 
                          traz.transaccion===this.trazabilidadSearch.transaccion.transaccionValor))


    console.log(this.subListaTrazabilidades);

    this.gestionTrazabilidadForm.reset();
  }
  buscarAplicacionPorId(idAplicacion:string){
    return this.supplierDataService.buscarAplicacionPorId(idAplicacion);
  }

  validacionformulario(){
    return !this.gestionTrazabilidadForm.valid 
  }
  
}
