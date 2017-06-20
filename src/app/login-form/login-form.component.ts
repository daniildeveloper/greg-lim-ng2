import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  /**
   * form using formbuilder
   */
  form: FormGroup;
  /**
   * form using form group
   */
  // form = new FormGroup(
  //   {
  //     username: new FormControl('', Validators.required),
  //     password: new FormControl('', Validators.required)
  //   }
  // );

  /**
   * form using form builder
   */
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  /**
   * prints form valuses in json format
   */
  login() {
    console.log(this.form.value);
  }

}
