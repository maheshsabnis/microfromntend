import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/app.htttp.service';
import { ProductData } from '../../services/app.product';

@Component({
  selector: 'app-appone-component',
  templateUrl: './app.componentone.view.html'
})
export class AppOneComponent implements OnInit {
  message: string;
  products: Array<ProductData>;
  constructor(private serv: HttpService) {
    this.message = 'The App1 Component';
    this.products = new Array<ProductData>();
  }
  sendMessage(): void {
    const appTwoElement = document.querySelector('app-two-element');
    if (appTwoElement !== null) {
      appTwoElement['inputValue'] = this.message;
    }
  }
  tableRowClick(p: ProductData): void {
    const appTwoElement = document.querySelector('app-two-element');
    if (appTwoElement !== null) {
      appTwoElement['inputValue'] = JSON.stringify(p);
    }
  }

  ngOnInit(): void {
    this.serv.get().subscribe((prds) => {
        this.products = prds;
    },(error) => {
      console.log(`Error Occured ${error}`);
    });
  }
}
