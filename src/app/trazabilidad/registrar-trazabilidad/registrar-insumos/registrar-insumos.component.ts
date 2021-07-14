import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TransaccionService } from 'src/app/services/transaccion.service';
import { InsumoService } from 'src/app/services/insumo.service';
import { debounceTime, map } from 'rxjs/operators';
import { Aplicacion } from 'src/app/model/aplicacion.model';
import { AplicacionService } from 'src/app/services/aplicacion.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-registrar-insumos',
  templateUrl: './registrar-insumos.component.html',
  styleUrls: ['./registrar-insumos.component.css']
})
export class RegistrarInsumosComponent implements OnInit {
  @ViewChild('form', { static: false }) signupForm: NgForm;
  private _success = new Subject<string>();
  private _error = new Subject<string>();
  isLoadingSucces:boolean =false;
  errorMessage: string=null;
  successMessage: string=null;

  insumo={
    nombreAplicacion:'',
    codigoProyecto:'',
    transaccion:'',
    listaComponenteSP:[],
    listaComponenteWS:[]
  };
  submitted = false;

  codAplicacionDefault:string='0';
  transaccionSeleccionada:string='';
  tipoComponente:string='';
  listAplicaciones:Aplicacion[];
  listaTransacciones:any;
  listaTipoComponentes=['STORE PROCEDURE', 'WEB SERVICE'];
  listaComponenteSP:{
    nombreComponente:string,
    baseDatos:string,
    nombreUsuario:string,
    funcionalidad:string,
    tipoComponente:string
  }[]=[];
  tipoComponenteSP:{
    nombreComponente:string,
    baseDatos:string,
    nombreUsuario:string,
    funcionalidad:string,
    tipoComponente:string
  }=null;
  listaComponenteWS:{
    nombreComponente:string,
    urlApi:string,
    tipoComponente:string
  }[]=[];
  tipoComponenteWS:{
    nombreComponente:string,
    urlApi:string,
    tipoComponente:string
  };

  listaComponentes:ComponenteItem[]=[];
  subListaTransacciones: any;
  constructor(
    private transaccionService:TransaccionService,
    private insumoService: InsumoService,
    private aplicacionService: AplicacionService) { }


  ngOnInit(): void {
    this.cargarListaTransacciones();
    this.cargarListaAplicaciones();
    this.codAplicacionDefault='Selecciona...';
    this.transaccionSeleccionada='Selecciona...';
    this.tipoComponente='Selecciona...';
    this._success.subscribe(message => this.successMessage = message);
    this._error.subscribe(message => this.errorMessage = message);
    this._success.pipe(debounceTime(3500)).subscribe(() => {
      this.isLoadingSucces=false;
    });
    this._error.pipe(debounceTime(3500)).subscribe(() => {
      this.errorMessage=null;
    });
  }
  private cargarListaAplicaciones() {
    this.aplicacionService.getAll()
                           .snapshotChanges()
                           .pipe( map(changes => 
                                changes.map(c => ({ key: c.payload.key, ...c.payload.val() })))
    ).subscribe(
      data => {
        this.listAplicaciones = data;
      }
    );
  }
  cargarListaTransacciones() {
    this.transaccionService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.listaTransacciones = data;
    });
  }

  onAgregarTrazabilidadInsumo(){
   this.submitted = true;
   this.insumo.nombreAplicacion= this.signupForm.value.nombreAplicacion;
   this.insumo.codigoProyecto= this.signupForm.value.codigoProyecto;
   this.insumo.transaccion=this.signupForm.value.transaccion;
   this.insumo.listaComponenteSP=this.listaComponenteSP;
   this.insumo.listaComponenteWS=this.listaComponenteWS;
   
   console.log(this.insumo);
   this.insumoService.crearInsumo(this.insumo);
   this.signupForm.reset();
   this.listaComponentes=null;
   this.isLoadingSucces=true;
   this._success.next("Insumo creado correctamente")
  }
  agregarComponente(){
    if (this.listaComponentes ==null ) this.listaComponentes =[];

    this.listaComponentes.push(
      {
        nombreComponente:this.signupForm.value.nombreComponente,
        tipoComponente:this.tipoComponente
      }
    );
    if (this.tipoComponente==='STORE PROCEDURE') {
      this.listaComponenteSP.push({
        nombreComponente:this.signupForm.value.nombreComponente,
        baseDatos:this.signupForm.value.baseDatos,
        nombreUsuario:this.signupForm.value.nombreUsuario,
        funcionalidad:this.signupForm.value.funcionalidad,
        tipoComponente:this.tipoComponente
      });
    }
    if (this.tipoComponente==='WEB SERVICE') {
      this.listaComponenteWS.push({
        nombreComponente:this.signupForm.value.nombreComponente,
        urlApi:this.signupForm.value.urlApi,
        tipoComponente:this.tipoComponente
      });
    }
    this.tipoComponente='';
    this.tipoComponente='Selecciona...';
  }  
  getAplicacionForGetTransaccion(){
    //console.log("metodo lanzado para buscar transaccion de "+this.codAplicacionDefault)
    //console.log(this.listaTransacciones);

    //const nombreAplicacion=this.buscarAplicacionPorId(this.codAplicacionDefault);
    this.subListaTransacciones= this.listaTransacciones.filter(t => t.aplicacionSeleccionada.key ===this.codAplicacionDefault);
    //console.log(this.subListaTransacciones);
  }
  buscarAplicacionPorId(idAplicacion:string):string{
    return this.listAplicaciones
               .find(
                   app => app.idAplicacion === idAplicacion 
                  ).nombreAplicacion;
  }  

  quitarComponente(index:number){
    this.listaComponentes.splice(index,1);
  }
}

interface ComponenteItem
{ 
  nombreComponente:string, 
  tipoComponente:string
}
