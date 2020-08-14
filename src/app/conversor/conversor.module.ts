import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConversorComponent } from './components';

import { MoedaService } from './services'

@NgModule({
  declarations: [
    ConversorComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    MoedaService
  ],
  exports: [
    ConversorComponent
  ]
})
export class ConversorModule { }
