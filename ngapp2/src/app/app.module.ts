import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import {createCustomElement} from '@angular/elements';
import { AppComponent } from './app.component';
import { AppTwoComponent } from './components/apptwocomponent/app.apptwo.component';

@NgModule({
  declarations: [
    AppComponent,
    AppTwoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [],
  entryComponents: [AppTwoComponent]
})
export class AppModule {
  constructor(private injector: Injector) { }

  ngDoBootstrap() {
    const appTwoElement = createCustomElement(AppTwoComponent, { injector: this.injector });
    customElements.define('app-two-element', appTwoElement);
  }
}
