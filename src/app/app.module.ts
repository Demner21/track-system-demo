import { TrazabiliadService } from './services/trazabilidad.service';
import { SupplierDataService } from './services/supplier.data.service';
import { TransaccionComponent } from './transaccion/transaccion.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {TransaccionService} from './services/transaccion.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { TrazabilidadComponent } from './trazabilidad/trazabilidad.component';
import { HeaderComponent } from './header/header.component';
import { RegistrarTransaccionComponent } from './transaccion/registrar-transaccion/registrar-transaccion.component';
import { RegistrarTrazabilidadComponent } from './trazabilidad/registrar-trazabilidad/registrar-trazabilidad.component';
import { DropdownDirective } from './directives/dropdown.directive';
import { ListarTransaccionesComponent } from './transaccion/listar-transacciones/listar-transacciones.component';
import { ListarTrazabilidadesComponent } from './trazabilidad/listar-trazabilidades/listar-trazabilidades.component';
import { RegistrarInsumosComponent } from './trazabilidad/registrar-trazabilidad/registrar-insumos/registrar-insumos.component';


@NgModule({
  declarations: [
    AppComponent,
    TransaccionComponent,
    TrazabilidadComponent,
    HeaderComponent,
    RegistrarTransaccionComponent,
    RegistrarTrazabilidadComponent,
    DropdownDirective,
    ListarTransaccionesComponent,
    ListarTrazabilidadesComponent,
    RegistrarInsumosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [
    TransaccionService,
    SupplierDataService,
    TrazabiliadService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
