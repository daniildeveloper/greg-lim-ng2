import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  /**
   * countries where users can be are from
   */
  countries = [
    'Inited States',
    'Singapore',
    'Hong Kong',
    'Australia'
  ];

  model = new User('', '');

  submited = false;

  /**
   * submit user
   */
  onSubmit() {
    this.submited = true;
  }
  constructor() { }

  ngOnInit() {
  }

}
