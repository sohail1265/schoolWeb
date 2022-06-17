import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UserSignupComponent } from './user-signup/user-signup.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { MainModule } from './main/main.module';
import { AttandenceComponent } from './attandence/attandence.component';
import { ClassesComponent } from './classes/classes.component';
import { MarksComponent } from './marks/marks.component';
import { StudentsComponent } from './students/students.component';
import { HomeComponent } from './home/home.component';
import { TeacherComponent } from './teacher/teacher.component';



@NgModule({
  declarations: [
    AppComponent,
   HomeComponent,
    AttandenceComponent,
    ClassesComponent,
    MarksComponent,
    StudentsComponent,
    UserSignupComponent,
    UserLoginComponent,
    TeacherComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainModule,
    HttpClientModule,
    NgModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
