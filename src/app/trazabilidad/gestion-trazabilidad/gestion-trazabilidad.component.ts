import { Component, OnInit, ViewChild } from '@angular/core';
import { TransaccionService } from 'src/app/services/transaccion.service';
import { map } from 'rxjs/operators';
import { SupplierDataService } from 'src/app/services/supplier.data.service';
import { NgForm } from '@angular/forms';
import { TrazabiliadService } from 'src/app/services/trazabilidad.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';
import { AplicacionService } from 'src/app/services/aplicacion.service';
import { UploadService } from 'src/app/services/upload.service';

@Component({
  selector: 'app-gestion-trazabilidad',
  templateUrl: './gestion-trazabilidad.component.html',
  styleUrls: ['./gestion-trazabilidad.component.css']
})
export class GestionTrazabilidadComponent implements OnInit {
  listaTrazabilidades = [];
  subListaTrazabilidades: any[];
  trazabilidadForModal: any=null;
  subListaTransacciones: any;

  constructor(
    private aplicacionService: AplicacionService,
    private supplierDataService: SupplierDataService,
    private transaccionService: TransaccionService,
    private trazabilidadService: TrazabiliadService,
    private modalService: NgbModal,
    private storage: AngularFireStorage,
    private uploadService:UploadService) { }

  @ViewChild('form', { static: false }) gestionTrazabilidadForm: NgForm;

  ngOnInit(): void {
    this.cargarListaAplicaciones();
    //this.listAplicaciones = this.supplierDataService.listAplicaciones;
    this.cargarListaTransacciones();
    this.trazabilidadService.getAll()
      .snapshotChanges()
      .pipe(map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() })))
      ).subscribe(
        data => {
          this.listaTrazabilidades = data;
        }
      );
  }
  private cargarListaAplicaciones() {
    this.aplicacionService.getAll()
                           .snapshotChanges()
                           .pipe( map(changes => 
                                changes.map(c => ({ key: c.payload.key, ...c.payload.val() })))
    ).subscribe(
      data => {
        this.listAplicaciones = data;
       // console.log('Lista de aplicaciones recibida: ');
        //console.log(this.listAplicaciones);
      }
    );
  }

  listAplicaciones: any;
  listaTransacciones: any;

  trazabilidadSearch: {
    idAplicacion: string,
    codigoProyecto: string,
    transaccion: any
  } = { idAplicacion: '', codigoProyecto: '', transaccion: null };

  transaccionValor:any = null;
  idAplicacion: string;

  private cargarListaTransacciones() {
    this.transaccionService.getAll()
      .snapshotChanges()
      .pipe(map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() })))
      ).subscribe(
        data => {
          this.listaTransacciones = data;
        }
      );
  }

  onBuscarTrazabilidad() {
    this.trazabilidadSearch.idAplicacion = this.idAplicacion;
    this.trazabilidadSearch.codigoProyecto = this.gestionTrazabilidadForm.value.codProyecto;
    this.trazabilidadSearch.transaccion = this.transaccionValor==null ?{  }:this.transaccionValor;

    //console.log(this.listaTrazabilidades);
    //console.log( this.listaTransacciones)
    //console.log( this.transaccionValor);
    //console.log( this.trazabilidadSearch)
    
     this.subListaTrazabilidades = this.listaTrazabilidades
      .filter(traz => traz.aplicacion === this.trazabilidadSearch.idAplicacion 
                      && (traz.transaccion===this.trazabilidadSearch.transaccion.transaccionValor ||
                          traz.proyecto.codigo === this.trazabilidadSearch.codigoProyecto  ))


    //console.log(this.subListaTrazabilidades);

    this.gestionTrazabilidadForm.reset();
  }
  buscarAplicacionPorId(idAplicacion:string){
    return this.listAplicaciones
               .find(
                   app => app.key === idAplicacion 
                  ).nombreAplicacion;
  }

  validacionformulario(){
    return !this.gestionTrazabilidadForm.valid 
  }
  openModalTrazabilidadDetalle(content, trazabilidad){
    console.log("openModalTrazabilidadDetalle" + trazabilidad)
    console.log(trazabilidad)
    this.trazabilidadForModal=trazabilidad;
    this.fileUploads_2=[];
    let listaDocumentacion = this.trazabilidadForModal.documentacion;
    console.log("listaDocumentacion")
    console.log(listaDocumentacion)
    
    if (listaDocumentacion) {
      listaDocumentacion.forEach(doc => {
        this.storage.ref(doc.urlDocumento)
        .getDownloadURL()
        .subscribe((url: string) => {
          //doc.urlDescarga=url;
          this.fileUploads_2.push({name: doc.nombreDocumento , url :url});
      });
      });
    }

    //const ref = this.storage.ref(this.trazabilidadForModal.urlDocumento);
    //this.profileUrl = ref.getDownloadURL();

    // let urlDocumentacion ='/upload/documents/';
    // this.uploadService.getFile(urlDocumentacion).snapshotChanges().pipe(
    //   map(changes =>
    //     // store the key
    //     changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
    //   )
    // ).subscribe(fileUploads => {
    //   this.fileUploads = fileUploads;
    // });

    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'})
      .result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });

  }
  closeResult = '';
  fileUploads?: any[];
  fileUploads_2?: any[];
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  profileUrl: Observable<string | null>;

  descargarArchivo(urlArchivo:string){
    console.log("archivo a buscar:" + urlArchivo);

    const ref = this.storage.ref(urlArchivo);
    this.profileUrl = ref.getDownloadURL();

    console.log("this.profileUrl:" + this.profileUrl);
    console.log( this.profileUrl);

    // this.uploadService.getFile(urlArchivo).snapshotChanges().pipe(
    //   map(changes =>
    //     // store the key
    //     changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
    //   )
    // ).subscribe(fileUploads => {
    //   this.fileUploads = fileUploads;
    // });

    this.profileUrl.subscribe(url =>{
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'blob';
      xhr.onload = function(event) {
          var blob = xhr.response;
       };
       xhr.open('GET', url);
      xhr.send();
    });

  }
  getAplicacionForGetTransaccion(){
    //console.log("metodo lanzado para buscar transaccion de "+this.idAplicacion)
    //console.log(this.listaTransacciones);
    //const nombreAplicacion=this.supplierDataService.buscarAplicacionPorId(this.idAplicacion);
    this.subListaTransacciones= this.listaTransacciones.filter(t => t.aplicacionSeleccionada.key ===this.idAplicacion);
    //console.log(this.subListaTransacciones);
  }
  public async getUrl(nombreArchivo: string) {
    this.storage.ref(nombreArchivo)
      .getDownloadURL()
      .subscribe((url: string) => {
     // actions with url value
    });
  }
}
