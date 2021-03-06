import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label,Color } from 'ng2-charts';
import { map } from 'rxjs/operators';
import { TransaccionService } from '../services/transaccion.service';
import { Transaccion } from '../transaccion/transaccion.model';

@Component({
  selector: 'app-graphics',
  templateUrl: './graphics.component.html',
  styleUrls: ['./graphics.component.css']
})
export class GraphicsComponent implements OnInit {
  listaTransacciones: Transaccion[];
  listaTorres: string[];
  transaccionSeleccionada:string='';
  

  constructor(private transaccionService:TransaccionService){

  }

  ngOnInit(): void {
    this.cargarListaTransacciones();
    this.mostrarTransacciones();
   
  }

  
  private cargarListaTransacciones() {
    this.transaccionService.getAll()
                           .snapshotChanges()
                           .pipe( map(changes => 
                                changes.map(c => ({ key: c.payload.key, ...c.payload.val() })))
    ).subscribe(
      data => {
        this.listaTransacciones = data;
      }
    );
  }

  mostrarTransacciones(){
    const firstMap= this.listaTransacciones.map(transaccion => transaccion.torreValor);
    const mapReduce = firstMap.reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map());
    console.log(mapReduce);
    this.barChartLabels =[ ...mapReduce.keys() ];
    const arrayData=[];
    for (let index = 0; index < this.barChartLabels.length; index++) {
      arrayData[index]= mapReduce.get(this.barChartLabels[index]);
    }
    console.log(arrayData);
    this.barChartData=[
      { data: arrayData, label: 'cantidad de transacciones por torre' }
    ];
    this.show=true;
  }
  
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartColors: Color[] = [
    { backgroundColor: 'green' },
  ]
  barChartLabels: Label[] ;
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];
  barChartData: ChartDataSets[] ;
  show:boolean=false;
}
