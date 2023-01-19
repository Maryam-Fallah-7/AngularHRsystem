import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { students } from 'src/app/Models/students';
import { SharedService } from 'src/app/services/shared.service';
import { StudentServicez } from 'src/app/services/student.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
id;
student=new students();
  constructor(public serv:StudentServicez,public router:Router ,public activeRoute:ActivatedRoute) {
    this.id=this.activeRoute.snapshot.paramMap.get('id');
    this.serv.getStudentsById(this.id).subscribe((data:any)=>{
     this.student=data; 
    })
   }
   

   editStd()
   {
    this.serv.updateStudent(this.id,this.student).subscribe((data)=>{
      this.router.navigateByUrl('/listStudents')
    })
   }

  // editStudent(){
  //   this.serv.updateStudent().subscribe((data)=>{

  //   })
  // }

 
}
