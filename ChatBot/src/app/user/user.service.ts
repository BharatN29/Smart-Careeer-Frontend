import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

declare var $:any;

@Injectable()
export class UserService {

  loggedIn: boolean;
  response: any;
  userDetails: any;

  constructor(private http: Http) { }

  public checkLoginStatus() {

    this.http.get("/api/getLoginStatus")
    .map(res => res.json())
    .catch(err => Observable.throw(err))
    .subscribe(
      data => this.response = data,
      error => console.log("Error occured while checking user session" + error),
      () => {
        if(typeof(this.response) != 'undefined' && typeof(this.response['message']) === 'undefined') {
          this.loggedIn = true;
          this.userDetails = this.response;
        }
        else {
          this.loggedIn = false;
        }
      }
    );
  }

  public logUser(formGroup: FormGroup) {
    var formData: FormData = new FormData();
    formData.append('uname', formGroup.get('uname').value);
    formData.append('pass', formGroup.get('pass').value);

    var headers: Headers = new Headers({});
    var requestOptions: RequestOptions = new RequestOptions({headers: headers});
    this.response = undefined;
    this.http.post("/api/login", formData, requestOptions)
    .map(res => res.json())
    .catch(err => Observable.throw(err))
    .subscribe(
      data => this.response = data,
      error => console.log("Error occured while logging in"),
      () => {
        console.log(this.response);
        if(typeof(this.response) != 'undefined') {

          if(typeof(this.response['err']) === 'undefined') {
            this.loggedIn = true;
            this.userDetails = this.response;
            $('#login').modal('hide');
            window.location.reload();
          }
          else {
            window.alert(this.response['err']);
          }
        }
        else {
          console.log("No response from server");
        }
      }
    )
  }


  public registerUser(formGroup: FormGroup) {
    var formData: FormData = new FormData();
    formData.append('fname', formGroup.get('fname').value);
    formData.append('lname', formGroup.get('lname').value);
    formData.append('email', formGroup.get('email').value);
    formData.append('uname', formGroup.get('uname').value);
    formData.append('pass', formGroup.get('pass').value);
    formData.append('mob', formGroup.get('mob').value);
    formData.append('sec_que', formGroup.get('sec_que').value);
    formData.append('sec_ans', formGroup.get('sec_ans').value);

    var headers: Headers = new Headers({});
    var requestOptions: RequestOptions = new RequestOptions({headers: headers});

    this.http.post("/api/register", formData, requestOptions)
    .map(res => res.json())
    .catch(err => Observable.throw(err))
    .subscribe (
      data => this.response = data,
      error => console.log(error),
      () => {
        if(typeof(this.response['err']) === 'undefined') {
          window.alert("Your account has been created successfully");
          this.loggedIn = true;
          this.userDetails = this.response;
          $('#signUp').modal('hide');
          window.location.reload();
        }
        else {
          window.alert(this.response['err']);
        }
      }
    )
  }

  public logMeOut() {

    this.http.get("/api/logout")
    .subscribe(
      data => data,
      err => console.log(err),
      () => {
        window.location.reload();
      }
    );
    
  }
}
