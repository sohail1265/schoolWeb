import { Component, OnInit } from '@angular/core';


import { SchoolMService } from '../school-m.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
studentsData:any[]=[];
studentsInputData={
  rollno:null,name:null,	fathername:	null,	class:null,	addresss:null
}
// variavles for pupups;;;;;;;;;;;;;;;;;;
getDismissReason:any;
closeResult:any;
modalService:any;
  constructor(
    private user:SchoolMService,
   
  ) { 
    this.user.allStudentsGet().subscribe(result=>{
      this.studentsData = result as [];
    })
    // open pupup;;;;;;;;;;;;;;;;;;;
  
  }

  ngOnInit(): void {
  }
  // students add;;;;;;;;;;;;;;;;;;;;;;;
  putStudents(){
    this.user.studentsPut(this.studentsInputData).subscribe(result=>{
      this.studentsData.unshift(result);
    })
  }
  // students delete;;;;;;;;;;;;;;;;
  deleteStudents(id:string, index:number){
  this.user.studentsDelete(id).subscribe(result=>{
    this.studentsData.splice(index, 1);
    console.log(result);
  })
}
}
