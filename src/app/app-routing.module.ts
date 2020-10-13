import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarTransaccionesComponent } from './transaccion/listar-transacciones/listar-transacciones.component';
import { RegistrarTransaccionComponent } from './transaccion/registrar-transaccion/registrar-transaccion.component';
import { ListarTrazabilidadesComponent } from './trazabilidad/listar-trazabilidades/listar-trazabilidades.component';
import { RegistrarInsumosComponent } from './trazabilidad/registrar-trazabilidad/registrar-insumos/registrar-insumos.component';
import { RegistrarTrazabilidadComponent } from './trazabilidad/registrar-trazabilidad/registrar-trazabilidad.component';

const routes: Routes = [
  { path:'registarTansaccion', component:RegistrarTransaccionComponent},
  { path:'listarTransacciones', component: ListarTransaccionesComponent},
  { path:'registrarTrazabilidad', component:RegistrarTrazabilidadComponent},
  { path:'listarTrazabilidades', component:ListarTrazabilidadesComponent},
  { path:'registarInsumo', component:RegistrarInsumosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
