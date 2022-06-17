import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { HeaderComponent } from './header/header.component';
import { AttandenceComponent } from '../attandence/attandence.component';
import { ClassesComponent } from '../classes/classes.component';
import { MarksComponent } from '../marks/marks.component';
import { StudentsComponent } from '../students/students.component';

const routes: Routes = [

  //  { path: 'home', component: HomeComponent },
  //   { path: 'attandece', component:AttandenceComponent },
  //   { path: 'clsasses', component:MarksComponent },

  //   { path: 'marks', component:MarksComponent  },
  //   { path: 'students', component: StudentsComponent },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
