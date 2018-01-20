import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { ResumeUploadComponent } from './resumeupload.component';
import { ResumeUploadService } from './resumeupload.service';
import { UserService } from '../user/user.service';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ResumeUploadComponent],
  exports: [ResumeUploadComponent],
  providers: [ResumeUploadService, UserService]
})
export class ResumeuploadModule { }
