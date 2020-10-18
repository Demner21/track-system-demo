import { Aplicacion }  from '../model/aplicacion.model'



export class SupplierDataService {
  listAplicaciones: Aplicacion[]=null;

  constructor() {
    this.listAplicaciones =[
      new Aplicacion('1','SIAC UNICO'),
      new Aplicacion('2','SISACT'),
    ];
  }
}
