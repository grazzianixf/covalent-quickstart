import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    AutocompleteComponent
  ],
  declarations: [AutocompleteComponent]
})
export class SharedModule { }
