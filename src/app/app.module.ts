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
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from 'src/environments/environment';
import { GestionTrazabilidadComponent } from './trazabilidad/gestion-trazabilidad/gestion-trazabilidad.component';
import { AplicacionComponent } from './aplicacion/aplicacion.component';
import { ListarAplicacionesComponent } from './aplicacion/listar-aplicaciones/listar-aplicaciones.component';
import { GetFileComponentComponent } from './get-file-component/get-file-component.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';


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
    RegistrarInsumosComponent,
    GestionTrazabilidadComponent,
    AplicacionComponent,
    ListarAplicacionesComponent,
    GetFileComponentComponent,
    IniciarSesionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule
  ],
  providers: [
    TransaccionService,
    SupplierDataService,
    TrazabiliadService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
