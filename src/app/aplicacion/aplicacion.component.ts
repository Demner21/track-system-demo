import { Component, OnInit ,ViewChild} from '@angular/core';
import { map } from 'rxjs/operators';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-aplicacion',
  templateUrl: './aplicacion.component.html',
  styleUrls: ['./aplicacion.component.css']
})
export class AplicacionComponent implements OnInit {

  @ViewChild('form', { static: false }) signupForm: NgForm;
  constructor() { }

  ngOnInit(): void {
  }

  aplicacion={
    nombreAplicacion:'',
    usuarioResponsable:'',
    torreValor:''
  };


  onCrearAplicacion(){
    this.aplicacion.nombreAplicacion= this.signupForm.value.nombreAplicacion;
    this.aplicacion.usuarioResponsable= this.signupForm.value.usuarioResponsable;
    this.aplicacion.torreValor=this.signupForm.value.torreValor;

    console.log(this.aplicacion);
  }
}
