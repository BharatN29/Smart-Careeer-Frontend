import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { UserComponent } from './user.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserService } from './user.service';
 

@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule, HttpModule
  ],
  declarations: [UserComponent, LoginComponent, SignupComponent],
  exports: [UserComponent],
  providers: [UserService]
})
export class UserModule { }
