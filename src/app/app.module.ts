import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TaxFormComponent } from './features/tax-formular/tax-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { OutputComponent } from './features/output/output.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { TestTagComponent } from './test-tag/test-tag.component';

@NgModule({
  declarations: [
    AppComponent,
    TaxFormComponent,
    OutputComponent,
    TestTagComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
