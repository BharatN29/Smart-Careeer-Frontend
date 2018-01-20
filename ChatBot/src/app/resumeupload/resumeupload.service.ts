import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable()
export class ResumeUploadService {

  response: any;
  userDetails: any;

  constructor(private http: Http,private router: Router) { }

  public uploadResumeDetails(formGroup: FormGroup, file: File) {

    var formData: FormData = new FormData();
    formData.append('fname', formGroup.get('fname').value);
    formData.append('lname', formGroup.get('lname').value);
    formData.append('email', formGroup.get('email').value);
    formData.append('mob', formGroup.get('mob').value);
    formData.append('pos', formGroup.get('pos').value);
    formData.append('resumeFile', file, file.name);
    formData.append('pweb', formGroup.get('pweb').value);
    formData.append('sal', formGroup.get('sal').value);
    formData.append('startDate', formGroup.get('startDate').value);
    formData.append('relocate', formGroup.get('relocate').value);
    formData.append('lastComp', formGroup.get('lastComp').value);
    formData.append('comments', formGroup.get('comments').value);


    var headers: Headers = new Headers({});
    headers.append('enctype', 'multipart/form-data');
    var requestOptions: RequestOptions = new RequestOptions({headers: headers});

    this.http.post("/api/resumeUpload", formData, requestOptions)
    .map(res => res.json())
    .catch(err => Observable.throw(err))
    .subscribe (
      data => this.response = data,
      error => console.log(error),
      () => {
        if(typeof(this.response['err']) === 'undefined') {
          window.alert(this.response['msg']);
          this.router.navigateByUrl("home");
        }
        else {
          window.alert(this.response['err']);
        }
      }
    )
  }

  public setUserData(formGroup: FormGroup) {
    this.http.get("/api/getLoginStatus")
    .map(res => res.json())
    .catch(err => Observable.throw(err))
    .subscribe(
      data => this.response = data,
      error => console.log("Error occured while checking user session" + error),
      () => {
        if(typeof(this.response) != 'undefined' && typeof(this.response['message']) === 'undefined') {
          this.userDetails = this.response;
          if(typeof(this.userDetails) != 'undefined') {

          formGroup.get("fname").setValue(this.userDetails['fname']);
          formGroup.get("fname").setErrors(null);
          formGroup.get("lname").setValue(this.userDetails['lname']);
          formGroup.get("lname").setErrors(null);
          formGroup.get("email").setValue(this.userDetails['email']);
          formGroup.get("email").setErrors(null);
          formGroup.get("mob").setValue(this.userDetails['mob']);
          formGroup.get("mob").setErrors(null);
    }
        }
      }
    );
  }

}
