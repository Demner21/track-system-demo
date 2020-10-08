export class Trazabiliad {

  constructor(
    private aplicacion: string,
    private transaccion: string,
    private torre: string,
    private proyecto: { codigo: string, descripcion: string },
    private documentacion: [{ nombreDocumento: string }]) {

    };


}
