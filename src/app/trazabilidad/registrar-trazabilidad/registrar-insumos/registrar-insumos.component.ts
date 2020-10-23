import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SupplierDataService } from 'src/app/services/supplier.data.service';
import { TransaccionService } from 'src/app/services/transaccion.service';
import { map } from 'rxjs/operators';
import { Aplicacion } from 'src/app/model/aplicacion.model';

@Component({
  selector: 'app-registrar-insumos',
  templateUrl: './registrar-insumos.component.html',
  styleUrls: ['./registrar-insumos.component.css']
})
export class RegistrarInsumosComponent implements OnInit {
  @ViewChild('form', { static: false }) signupForm: NgForm;

  insumo={
    nombreAplicacion:'',
    codigoProyecto:'',
    transaccion:'',
    listaComponenteSP:[],
    listaComponenteWS:[]
  };
  submitted = false;

  codAplicacionDefault:string='1';
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

  listaComponentes:{nombreComponente:string, tipoComponente:string}[]=[];
  constructor(private supplierData:SupplierDataService,
    private transaccionService:TransaccionService) { }


  ngOnInit(): void {
    this.listAplicaciones=this.supplierData.listAplicaciones;
    this.cargarListaTransacciones();

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
      console.log('lista de aplicaciones cargada'+ this.listaTransacciones);
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
   this.signupForm.reset();
   this.listaComponentes=null;
  }
  agregarComponente(){
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
  }  
}
