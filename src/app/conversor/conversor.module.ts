import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'

import { ConversorComponent } from './components';

import { MoedaService, ConversorService } from './services'

@NgModule({
  declarations: [
    ConversorComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    MoedaService,
    ConversorService
  ],
  exports: [
    ConversorComponent
  ]
})
export class ConversorModule { }
