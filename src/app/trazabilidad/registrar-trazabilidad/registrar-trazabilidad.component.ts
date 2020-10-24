import { Component, OnInit, ViewChild } from '@angular/core';
import { SupplierDataService } from 'src/app/services/supplier.data.service';
import { TransaccionService } from 'src/app/services/transaccion.service';
import { TrazabiliadService } from 'src/app/services/trazabilidad.service';
import { Trazabilidad } from '../trazabilidad.model';
import { map } from 'rxjs/operators';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registrar-trazabilidad',
  templateUrl: './registrar-trazabilidad.component.html',
  styleUrls: ['./registrar-trazabilidad.component.css']
})
export class RegistrarTrazabilidadComponent implements OnInit {
  @ViewChild('form', { static: false }) signupForm: NgForm;

  nombreAplicacion = '';
  transaccionSeleccionada = '';
  listaTransacciones: any;
  subListaTransacciones:any;
  listAplicaciones: any;
  
  constructor(private supplierDataService: SupplierDataService,
    private transaccionService: TransaccionService,
    private trazabilidadService: TrazabiliadService) {}

  ngOnInit(): void {
    this.listAplicaciones = this.supplierDataService.listAplicaciones;
    this.cargarListaTransacciones();
  }

  private cargarListaTransacciones() {
    this.transaccionService.getAll()
                           .snapshotChanges()
                           .pipe( map(changes => 
                                changes.map(c => ({ key: c.payload.key, ...c.payload.val() })))
    ).subscribe(
      data => {
        this.listaTransacciones = data;
        console.log(this.listaTransacciones);
      }
    );
  }

  onCreateTrazabilidad(): void {
    this.trazabilidadService.crearTrazabilidad(
      new Trazabilidad(
        this.nombreAplicacion, 
        this.transaccionSeleccionada, 
        this.signupForm.value.torreValor,
        { codigo: this.signupForm.value.codigoProyecto,
           descripcion: this.signupForm.value.descripcionProyecto }, null)
    );
    this.signupForm.reset();
  }

  getAplicacionForGetTransaccion(){
    console.log("metodo lanzado para buscar transaccion de "+this.nombreAplicacion)
    console.log(this.listaTransacciones);

    const nombreAplicacion=this.supplierDataService.buscarAplicacionPorId(this.nombreAplicacion);
    this.subListaTransacciones= this.listaTransacciones.filter(t => t.aplicacionSeleccionada ===nombreAplicacion);
    console.log(this.subListaTransacciones);
  }

}
