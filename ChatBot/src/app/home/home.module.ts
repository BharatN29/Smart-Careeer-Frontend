import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { GmapModule } from '../gmap/gmap.module';
import { ResumeuploadModule } from '../resumeupload/resumeupload.module';
import { AppRoutingModule } from '../app.routing.module';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    GmapModule,
    ResumeuploadModule

  ],
  declarations: [HomeComponent],
  exports: [HomeComponent],
})
export class HomeModule { }
