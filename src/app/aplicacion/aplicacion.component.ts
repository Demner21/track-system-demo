import { Component, OnInit ,ViewChild } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { NgForm } from '@angular/forms';
import { AplicacionService } from '../services/aplicacion.service';
import { Aplicacion } from '../model/aplicacion.model';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-aplicacion',
  templateUrl: './aplicacion.component.html',
  styleUrls: ['./aplicacion.component.css']
})
export class AplicacionComponent implements OnInit {
  @ViewChild('form', { static: false }) signupForm: NgForm;

  private _success = new Subject<string>();
  constructor(private aplicacionService:AplicacionService) { }


  ngOnInit(): void {
    this._success.subscribe(message => this.successMessage = message);
    this._success.pipe(debounceTime(3500)).subscribe(() => {
      this.isLoadingSucces=false;
    });
  }

  aplicacion={
    nombreAplicacion:'',
    usuarioResponsable:'',
    torreValor:''
  };


  onCrearAplicacion(){
    this.isLoading=true;
    this.aplicacion.nombreAplicacion= this.signupForm.value.nombreAplicacion;
    this.aplicacion.usuarioResponsable= this.signupForm.value.usuarioResponsable;
    this.aplicacion.torreValor=this.signupForm.value.torreValor;
    this.aplicacionService.crearAplicacion(new Aplicacion('',this.aplicacion.nombreAplicacion,
    this.aplicacion.usuarioResponsable,this.aplicacion.torreValor));
    console.log(this.aplicacion);
    this.isLoading=false;
    this.isLoadingSucces=true;
    this.signupForm.reset();
    this._success.next("Aplicacion creada correctamente")
  }

  isLoading:boolean =false;
  isLoadingSucces:boolean =false;
  errorMessage: string=null;
  successMessage: string=null;

}
