import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-two-component',
  templateUrl: './app.componenttwo.view.html'
})
export class AppTwoComponent implements OnInit {
  message: string;

  private _inputValue: string;
  constructor() {
    this.message = 'The App2 Component';
    this._inputValue = '';
  }

  @Input()
  set inputValue(v: string) {
    this._inputValue = v;
  }
  get inputValue(): string {
    return this._inputValue;
  }



  ngOnInit(): void { }
}
