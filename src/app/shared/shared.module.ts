import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { CovalentCoreModule } from '@covalent/core';

@NgModule({
  imports: [
    CommonModule, CovalentCoreModule
  ],
  exports: [
    AutocompleteComponent
  ],
  declarations: [AutocompleteComponent]
})
export class SharedModule { }
