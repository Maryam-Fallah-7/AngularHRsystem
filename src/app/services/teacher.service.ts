import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Teacher } from '../Models/Teacher';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class TeacherService extends SharedService<Teacher>{

  constructor(public http:HttpClient) {
    super(http," http://localhost:3000/teacher");
   }
}
