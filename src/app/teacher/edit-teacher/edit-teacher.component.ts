import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Teacher } from 'src/app/Models/Teacher';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-edit-teacher',
  templateUrl: './edit-teacher.component.html',
  styleUrls: ['./edit-teacher.component.css']
})
export class EditTeacherComponent  {
id;
teacher=new Teacher();
  constructor(public serv:TeacherService,public router:Router,public activeRoute:ActivatedRoute ) 
  { 
this.id=this.activeRoute.snapshot.paramMap.get('id');
this.serv.getStudentsById(this.id).subscribe((data)=>{
  this.teacher=data;
})


  }
  editTeacher()
  {
    this.serv.updateStudent(this.id,this.teacher).subscribe((data)=>{
      this.router.navigateByUrl('/listteachers');
    })
  }

  

 
}
