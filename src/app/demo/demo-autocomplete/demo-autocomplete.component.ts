import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';

import { TdMediaService } from '@covalent/core';

@Component({
  selector: 'app-demo-autocomplete',
  templateUrl: './demo-autocomplete.component.html',
  styleUrls: ['./demo-autocomplete.component.scss']
})
export class DemoAutocompleteComponent implements OnInit {

  constructor(private _titleService: Title,
              public media: TdMediaService) { }

  ngOnInit() {
  }

}
