import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from '../home/home.component';
import { HeaderComponent } from './header/header.component';
import { AttandenceComponent } from '../attandence/attandence.component';
import { ClassesComponent } from '../classes/classes.component';
import { MarksComponent } from '../marks/marks.component';
import { StudentsComponent } from '../students/students.component';

@NgModule({
  declarations: [
    HeaderComponent,
    // HomeComponent,
    // AttandenceComponent,
    // ClassesComponent,
    // MarksComponent,
    // StudentsComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
