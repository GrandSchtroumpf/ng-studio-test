import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyComponent } from './lazy.component';


@NgModule({
  declarations: [LazyComponent],
  exports: [LazyComponent],
  imports: [
    CommonModule
  ]
})
export class LazyModule { }
