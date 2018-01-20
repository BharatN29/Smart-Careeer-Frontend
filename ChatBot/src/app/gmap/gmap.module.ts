import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GmapComponent } from './gmap.component';

import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
    apiKey: 'AIzaSyBLfAjZqEMl1LC1Vw3Ov4vjY_qBv-guI7M'
    })
  ],
  providers: [],
  declarations: [GmapComponent],
  bootstrap: [ GmapComponent ],
  exports: [GmapComponent]
})
export class GmapModule { }


