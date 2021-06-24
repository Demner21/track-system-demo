import { Component, Input, OnInit } from '@angular/core';
import { FileUpload } from '../model/file-upload';

@Component({
  selector: 'app-trazabilidad',
  templateUrl: './trazabilidad.component.html',
  styleUrls: ['./trazabilidad.component.css']
})
export class TrazabilidadComponent implements OnInit {

  @Input() documento!: FileUpload;

  constructor() { }

  ngOnInit(): void {
  }

}
