import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Teacher } from 'src/app/Models/Teacher';
import { StudentServicez } from 'src/app/services/student.service';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css']
})
export class AddTeacherComponent  {

 

  teacher=new Teacher();
  constructor(public serv:TeacherService,public router:Router) { }
  addNewTeacher(){
    this.serv.postStudents(this.teacher).subscribe((data)=>{
      this.router.navigateByUrl('/listteachers')
    })

  }}
