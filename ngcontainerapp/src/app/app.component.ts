import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngcontainerapp';
  message: string;
  constructor(){
    this.message = '';
  }

  listener(event): void {
     this.message = event.detail;
  }
}
