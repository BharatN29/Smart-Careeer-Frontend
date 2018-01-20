import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Http } from '@angular/http';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from './user/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [ NgbAccordionConfig , UserService],
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {

  returnedMessage: string;
  userDetails: any;
  response: any;

  constructor(public http: Http, config: NgbAccordionConfig) {

    config.closeOthers = false;
    config.type = 'warning';
  }

  ngOnInit() {

    this.http.get("/api/getLoginStatus")
    .map(res => res.json())
    .catch(err => Observable.throw(err))
    .subscribe(
      data => this.response = data,
      error => console.log("Error occured while checking user session" + error),
      () => {
        if(typeof(this.response) != 'undefined' && typeof(this.response['message']) === 'undefined') {
          this.userDetails = this.response['fname'] + " " + this.response['lname'];
        }
      }
    );
  }


  
  heroes = [];
  addHero(box: string) {
    if (box) {
      this.heroes.push(box);
    }
  }

  public formreset(){
    var fieldId = 'btn-input';
    var resetForm = <HTMLFormElement>document.getElementById(fieldId);
    resetForm.reset();
  }
  

  /*cmsg = ["hello","how are you?","Tell me how can I help you?","yes! ofcourse","yes! ofcourse","please refer the About Us","I am Confused"];*/

  public msg1 : any = "Welcome to SmartCareer";
  public msg2 : any = "Hello! how are you?";
  public msg3 : any = "Do you want to boost your career with us?";
  public msg4 : any = "Please fill the form given below, and upload your latest Resume";
  public msg5 : any = "I am Confused";


  public umsg1 : any = "hi";
  public umsg2 : any = "I am good.";
  public umsg3 : any = "yes";
  public umsg4 : any = "thanks";
  

  

  public robot(){

      if(this.umsg1 == this.heroes)
      { 
         this.msg1 = this.msg2;
      }
      else if(this.umsg2 == this.heroes)
      { 
         this.msg1 = this.msg3;
      }
      else if(this.umsg3 == this.heroes)
      { 
         this.msg1 = this.msg4;
      }
      else if(this.umsg4 == this.heroes)
      { 
         this.msg1 = "Welcome";
      }
      else {
          this.msg1 = this.msg5;
      }
      this.heroes.pop();
  }
}

