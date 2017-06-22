import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-observ',
  templateUrl: './observ.component.html',
  styleUrls: ['./observ.component.css']
})
export class ObservComponent implements OnInit {
  /**
   * built in controller for form events
   */
  searchControl = new FormControl();
  constructor() {
    this.searchControl.valueChanges.subscribe(
      value => {
        console.log(value);
      }
    );
  }

  ngOnInit() {
  }

}
