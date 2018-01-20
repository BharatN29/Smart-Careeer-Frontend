import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResumeUploadComponent } from './resumeupload/resumeupload.component';



const routes: Routes = [
    { path: '',  redirectTo: 'home', pathMatch:'full'},
    { path: 'home', component: HomeComponent},
    { path: 'home/resumeupload', component: ResumeUploadComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}