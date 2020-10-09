import { Trazabilidad } from './../trazabilidad/trazabilidad.model';

export class TrazabiliadService{
  listaTrazabilidades: Trazabilidad[]=[];

  crearTrazabilidad(traz:Trazabilidad) {
    this.listaTrazabilidades.push(traz);
  }
}
