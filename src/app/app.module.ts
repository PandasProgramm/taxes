import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TaxFormComponent } from './features/tax-formular/tax-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { OutputComponent } from './features/output/output.component';

@NgModule({
  declarations: [
    AppComponent,
    TaxFormComponent,
    OutputComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
