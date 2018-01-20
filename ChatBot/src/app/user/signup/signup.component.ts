import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [UserService]
})
export class SignupComponent implements OnInit {

  signUpFormGroup: FormGroup;
  constructor(private formBuilder: FormBuilder, public userService: UserService) { }

  ngOnInit() {
    this.signUpFormGroup = this.formBuilder.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      email: ['', Validators.required],
      uname: ['', Validators.required],
      pass: ['', Validators.required],
      cpass: ['', Validators.required],
      mob: [''],
      sec_que: [''],
      sec_ans: ['']
    });
  }


  public register() {
    if(this.signUpFormGroup.valid) {
      this.userService.registerUser(this.signUpFormGroup);
    }
    else {
      window.alert("Some required fields might not be filled up");
    }
  }
 }
