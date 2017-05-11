import { Component, OnInit } from '@angular/core';
import {FormControl, NgModel} from '@angular/forms';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent implements OnInit {

  reactiveStates: any;
  tdStates: any[];

  states = [
    { code : 1, name : "CE"},
    { code : 2, name : "RN"}
  ];

  stateCtrl: FormControl;
  currentState = '';  

  constructor() {
      this.tdStates = this.states;
      this.stateCtrl = new FormControl({code: 'CA', name: 'California'});
      this.reactiveStates = this.stateCtrl.valueChanges
          .startWith(this.stateCtrl.value)
          .map(val => this.displayFn(val))
          .map(name => this.filterStates(name));    
  }

  ngOnInit() {
  }

  displayFn(value: any): string {
    return value && typeof value === 'object' ? value.name : value;
  }  

  filterStates(val: string) {
    return val ? this.states.filter(s => new RegExp(`${val}`, 'gi').test(s.name))
               : this.states;
  }  
}
