import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { students } from 'src/app/Models/students';
import { SharedService } from 'src/app/services/shared.service';
import { StudentServicez } from 'src/app/services/student.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {


  student=new students();
  constructor(public serv:StudentServicez,public router:Router) { }
  addNewStudent(){
    this.serv.postStudents(this.student).subscribe((data)=>{
      this.router.navigateByUrl('/listStudents')
    })
    
  }



}
