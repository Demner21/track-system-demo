import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'track-system-demo';
  nameForTest = 'Demneru';
  active = 1;
  isCollapsed: boolean;

  ngOnInit(): void {
    this.isCollapsed = true;

  }
}
