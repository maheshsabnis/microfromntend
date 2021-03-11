import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {createCustomElement} from '@angular/elements';
import { AppComponent } from './app.component';
import { AppOneComponent } from './components/apponecomponent/app.appone.component';

@NgModule({
  declarations: [
    AppComponent,
    AppOneComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [],
  entryComponents: [AppOneComponent]
})
export class AppModule {
  constructor(private injector: Injector){}
  ngDoBootstrap(){
    const appOneElement = createCustomElement(AppOneComponent, {injector: this.injector});
    customElements.define('app-one-element', appOneElement );
  }
}
