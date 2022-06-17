import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SchoolMService {

  constructor(
    private http:HttpClient,
    private router: Router,
  ) { }
// students record;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
  allStudentsGet(){
    let url = "http://localhost:4000/allStudentsGet";
    return this.http.get(url);
  }

  studentsDelete(id:string){
    let url= "http://localhost:4000/StudentDelete?id="+id;
    return this.http.delete(url);
  }
  studentsPut( json:any){
    let url= "http://localhost:4000/studentsUpdate?id="+json._id;
    return this.http.post(url,json);
  }
  studentsUpdate(id:string){
    let url= "http://localhost:4000/StudentDelete?id="+id;
    return this.http.delete(url);
  }

  // attandence of students;;;;;;;;;;;;;;;;;;;;;;
  allAttandenceGet(){
    let url = "http://localhost:4000/allAttandeceGet";
    return this.http.get(url);
  }
 AttandenceDelete(id:string){
    let url= "http://localhost:4000/attandenceDelete?id="+id;
    return this.http.delete(url);
  }
  AttandencePut( json:any){
    let url= "http://localhost:4000/AttandencePut?id="+json._id;
    return this.http.post(url,json);
  }
  AttandenceUpdate(id:string){
    let url= "http://localhost:4000/AttandeceUpdate?id="+id;
    return this.http.delete(url);
  }

}
