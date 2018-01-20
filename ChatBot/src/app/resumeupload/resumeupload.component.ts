import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ResumeUploadService } from './resumeupload.service';

@Component({
  selector: 'app-resumeupload',
  templateUrl: './resumeupload.component.html',
  styleUrls: ['./resumeupload.component.css'],
})
export class ResumeUploadComponent implements OnInit {

  resumeFile: File;
  resumeFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private resumeUploadService: ResumeUploadService) { }


  ngOnInit() {

    this.resumeFormGroup = this.formBuilder.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      email: ['', Validators.required],
      mob: ['', Validators.required],
      pos:['', Validators.required],
      resumeFile: [''],
      pweb: [''],
      sal: ['', Validators.required],
      startDate: ['', Validators.required],
      relocate: ['', Validators.required],
      lastComp: [''],
      comments: ['']
    });

    this.resumeUploadService.setUserData(this.resumeFormGroup);
  }

  public fileUploadListener($event) {
    const fileList: FileList = $event.target.files;
    if( fileList.length > 0) {
      this.resumeFile = fileList[0]
    }
    else {
      this.resumeFile = undefined;
    }
  }

  public submitDisable(): Boolean {
    return !this.resumeFormGroup.valid || typeof(this.resumeFile) === 'undefined';
  }

  public uploadDetails() {
  
    if(this.resumeFormGroup.valid) {

      this.resumeUploadService.uploadResumeDetails(this.resumeFormGroup, this.resumeFile);
      
    }
    else {
      window.alert("Fill the required fields");
    }
  }
 }
