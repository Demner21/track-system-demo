import { TransaccionComponent } from './transaccion/transaccion.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { TrazabilidadComponent } from './trazabilidad/trazabilidad.component';
import { HeaderComponent } from './header/header.component';
import { RegistrarTransaccionComponent } from './transaccion/registrar-transaccion/registrar-transaccion.component';


@NgModule({
  declarations: [
    AppComponent,
    TransaccionComponent,
    TrazabilidadComponent,
    HeaderComponent,
    RegistrarTransaccionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
