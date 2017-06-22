import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/filter'; // use to filter with value
import 'rxjs/add/operator/debounceTime'; // use to wait any time between oprations
import 'rxjs/add/operator/distinctUntilChanged';

/**
 * Example how to subscribe observables from DOM events. How to contain aplly certain Observable opertors
 * like filter, debounceTime, distinctUntilChanged to avoid send multiple requests.
 *
 * Get obsevable stream from input. 
 */
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
    this.searchControl.valueChanges
      .filter(text => text.length >= 3) // use to filter with value
      .debounceTime(1000) // use to wait any time between oprations
      .distinctUntilChanged()
      .subscribe(
      value => {
        console.log(value);
      }
      );
  }

  ngOnInit() {
  }

}
