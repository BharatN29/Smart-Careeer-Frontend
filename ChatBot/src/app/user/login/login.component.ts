import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { Observable } from 'rxjs';
import {UserService} from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {

  loginFormGroup: FormGroup;
  constructor(private formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit() {
    this.loginFormGroup = this.formBuilder.group({
      uname: ['', Validators.required],
      pass: ['', Validators.required]
    });
  }

  public login() {

    if(this.loginFormGroup.valid) {
      this.userService.logUser(this.loginFormGroup);
    }
    else {
      window.alert("Fill the details");
    }
  }
}
