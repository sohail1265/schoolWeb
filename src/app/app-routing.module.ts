import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { min } from 'rxjs';
import { AttandenceComponent } from './attandence/attandence.component';
import { HomeComponent } from './home/home.component';
import {StudentsComponent} from './students/students.component'
import { MarksComponent } from './marks/marks.component';
import { SchoolMService } from './school-m.service';

import { UserLoginComponent } from './user-login/user-login.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { TeacherComponent } from './teacher/teacher.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';




const routes: Routes = [
  {
    path: 'main',canActivate:[SchoolMService],
    loadChildren: () =>
      import('./main/main.module').then((comp: any) => comp.MainModule),
  },
    { path: '', component: HomeComponent },
    { path: 'attandece', component:AttandenceComponent },
    { path: 'teachers', component:TeacherComponent},
    { path: 'marks', component:MarksComponent  },
    { path: 'students', component: StudentsComponent },
    { path: 'longin', component:UserLoginComponent },
    { path: 'signup', component:UserSignupComponent},
    
    
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    HttpClientModule,
    AppRoutingModule,
    // BrowserAnimationsModule,
    BrowserModule,
    // BrowserAnimationsModule,
    // MatDialogModule,
    // <====== this is the solution
  ],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
