import { Component, OnInit } from '@angular/core';
import { SupplierDataService } from 'src/app/services/supplier.data.service';
import { TransaccionService } from 'src/app/services/transaccion.service';
import { TrazabiliadService } from 'src/app/services/trazabilidad.service';
import { Trazabilidad } from '../trazabilidad.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-registrar-trazabilidad',
  templateUrl: './registrar-trazabilidad.component.html',
  styleUrls: ['./registrar-trazabilidad.component.css']
})
export class RegistrarTrazabilidadComponent implements OnInit {
  nombreAplicacion = '';
  codigoProyecto = '';
  torreValor = '';
  descripcionProyecto = '';
  transaccionSeleccionada = '';
  descripcionCambioTransaccion = '';

  listaTransacciones: any;
  listAplicaciones: any;
  constructor(private supplierDataService: SupplierDataService,
    private transaccionService: TransaccionService,
    private trazabilidadService: TrazabiliadService) { }

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
      }
    );
  }

  onCreateTrazabilidad(): void {
    this.trazabilidadService.crearTrazabilidad(
      new Trazabilidad(
        this.nombreAplicacion, this.transaccionSeleccionada, this.torreValor,
        { codigo: this.codigoProyecto, descripcion: this.descripcionProyecto }, null)
    );
  }

}
