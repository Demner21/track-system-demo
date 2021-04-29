import { Component, OnDestroy, OnInit } from '@angular/core';
import { from, interval, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-listar-aplicaciones',
  templateUrl: './listar-aplicaciones.component.html',
  styleUrls: ['./listar-aplicaciones.component.css']
})
export class ListarAplicacionesComponent implements OnInit, OnDestroy {

  constructor() { }
  ngOnDestroy(): void {
    this.tempOnSubscription.unsubscribe();
  }
  private tempOnSubscription:Subscription;

  ngOnInit(): void {
    //const data = from(fetch('/api/endpoint'));
    this.tempOnSubscription= interval(1000)
      .pipe( map( (response: number)=>{ return 'Value of data: '+(response*10)}))
      .subscribe({
      next( response) {console.log(response);},
      error(err) {console.log('Error: '+ err);},
      complete(){console.log('Completed');}
    });
  }

}
