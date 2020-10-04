export class Transaccion{
  public aplicacionSeleccionada: string;
  public torreValor:string;
  public transaccionValor:string;

  constructor(aplicacionSeleccionada: string , torreValor : string , transaccionValor: string){
    this.aplicacionSeleccionada=aplicacionSeleccionada;
    this.torreValor=torreValor;
    this.transaccionValor=transaccionValor;
  }
}
