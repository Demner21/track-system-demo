import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() pageToLoad = new EventEmitter<string>();

  isCollapsed: boolean;
  constructor() { }

  ngOnInit(): void {
    this.isCollapsed = true;
  }

  onLoadPage(feature:string){
    this.isCollapsed = true;
    this.pageToLoad.emit(feature);
  }

}
