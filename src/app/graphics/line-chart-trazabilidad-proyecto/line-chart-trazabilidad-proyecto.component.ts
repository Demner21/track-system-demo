import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { map } from 'rxjs/operators';
import { TrazabiliadService } from 'src/app/services/trazabilidad.service';

@Component({
  selector: 'app-line-chart-trazabilidad-proyecto',
  templateUrl: './line-chart-trazabilidad-proyecto.component.html',
  styleUrls: ['./line-chart-trazabilidad-proyecto.component.css']
})
export class LineChartTrazabilidadProyectoComponent implements OnInit {
  listaTrazabilidades: any[];
  show: boolean=false;

  constructor(private trazabilidadService:TrazabiliadService) { }

  ngOnInit(): void {
    this.cargarListaTransacciones();
  }

  private cargarListaTransacciones() {
    this.trazabilidadService.getAll()
                           .snapshotChanges()
                           .pipe( map(changes => 
                                changes.map(c => ({ key: c.payload.key, ...c.payload.val() })))
    ).subscribe(
      data => {
        this.listaTrazabilidades = data;
      }
    );
  }

  lineChartData: ChartDataSets[]=[] ;

  lineChartLabels: Label[] =["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';
  
  mostrarTrazabilidades(){
    
    //const firstMap= this.listaTrazabilidades.map(trazabilidad =>  new Date(trazabilidad.fechaCreacion) .toLocaleString('default', { month: 'long' }));
    const nombreTransaccion='ESTADO DE CUENTA';
    
    const subListaConTransaccion= this.listaTrazabilidades.filter(traz=> traz.transaccion===nombreTransaccion );
    console.log("sublista: filtrada con nombreTransaccion")
    console.log(subListaConTransaccion)

    const mapWithCodigoProyectos= subListaConTransaccion
                                        .map(trazabilidad =>  trazabilidad.proyecto.codigo);
    
    const tempMonth=                     [...new Set(mapWithCodigoProyectos)];
    
    console.log("tempMonth:")
    console.log(tempMonth)

    for (let index = 0; index < tempMonth.length; index++) {
      const proyecto = tempMonth[index];
      console.log("iterando sobre proyecto"+ proyecto);
      const mapWithMonths= subListaConTransaccion.filter(traz=> traz.proyecto.codigo===proyecto)
                                              .map(trazabilidad =>  new Date(trazabilidad.fechaCreacion).getMonth());
      
      console.log("mapa de meses encontrado del proyecto"+ proyecto);
      console.log(mapWithMonths);
      
      const mapReduce = mapWithMonths.reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map());
      console.log(mapReduce);
      const monthReduce =[ ...mapReduce.keys() ].sort();
      
      const arrayData=[];
      for (let index = 0; index < monthReduce.length; index++) {

        arrayData[monthReduce[index]]= mapReduce.get(monthReduce[index]);
      }
      
      console.log("arrayData");
      console.log(arrayData);

      this.lineChartData.push( { data: arrayData, label: proyecto });
    }
    this.lineChartLabels = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];;
    this.show=true;
  }

}
