import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TaxFormularComponent } from './features/tax-formular/tax-formular.component';

@NgModule({
  declarations: [
    AppComponent,
    TaxFormularComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
