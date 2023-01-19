import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Teacher } from 'src/app/Models/Teacher';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-list-teacher',
  templateUrl: './list-teacher.component.html',
  styleUrls: ['./list-teacher.component.css']
})
export class ListTeacherComponent  {
  teacher;
  constructor(public serve:TeacherService) 
  {
  this.serve.getStudents().subscribe((data) =>{
    this.teacher=data;
  })
   }

   deleteTeacher(id){
    this.serve.deleteStudent(id).subscribe((data)=>{
      window.location.reload();
    })
   }

 

}
