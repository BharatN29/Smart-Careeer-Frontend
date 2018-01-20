import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { PopoverModule } from 'ng2-pop-over';
import { UserComponent } from './user/user.component';

import { AppComponent } from './app.component';
import { NavgiationComponent } from './navgiation/navgiation.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeModule } from './home/home.module';
import { UserModule } from './user/user.module';
import { AppRoutingModule } from './app.routing.module';
import { UserService } from './user/user.service';



@NgModule({
  declarations: [
    AppComponent,
    NavgiationComponent,
    
  ],
  imports: [
    BrowserModule,
    PopoverModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    HttpModule,
    HomeModule,
    UserModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
