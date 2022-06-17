import { Component, OnInit } from '@angular/core';
import { SchoolMService } from '../school-m.service';

@Component({
  selector: 'app-attandence',
  templateUrl: './attandence.component.html',
  styleUrls: ['./attandence.component.css']
})
export class AttandenceComponent implements OnInit {
attandenceData:any[]=[];
getDataFromStuTable:any[]=[];
attandenceFromFrontend= {
  date:null,
}
  constructor(
    private user: SchoolMService,
  ) { 
this.user.allAttandenceGet().subscribe(result=>{
  this.attandenceData = result as [];
})
  }

  ngOnInit(): void {
  }
  putAttandence(){
    this.user.AttandencePut(this.attandenceFromFrontend).subscribe(result=>{
      this.attandenceData.unshift(result);
    })
  }

}
