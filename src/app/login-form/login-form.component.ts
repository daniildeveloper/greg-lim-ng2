import { LoginService } from './login.service';
import { PasswordValidator } from './passwordValidator';

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
  constructor(fb: FormBuilder, private _loginService: LoginService) {
    this.form = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required, PasswordValidator.cannotContainSpace]
    });
  }

  ngOnInit() {
  }

  /**
   * prints form valuses in json format
   */
  login() {
    console.log(this.form.value);
    let result = this._loginService.login(
      this.form.controls['username'],
      this.form.controls['password']
    );
    if (!result) {
      this.form.controls['password'].setErrors({
        invalidLogin: true
      });
    }
  }

}
