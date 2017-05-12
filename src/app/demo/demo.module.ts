import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoAutocompleteComponent } from './demo-autocomplete/demo-autocomplete.component';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    DemoAutocompleteComponent
  ],
  declarations: [DemoAutocompleteComponent]
})
export class DemoModule { }
