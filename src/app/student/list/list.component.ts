import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { StudentServicez } from 'src/app/services/student.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent{

  std;
  constructor( public serv:StudentServicez){
    this.serv.getStudents().subscribe((data)=>{
      this.std=data;
      
    });

}
deleteStudent(id){
  this.serv.deleteStudent(id).subscribe((data)=>{
window.location.reload();

  })
}



}
