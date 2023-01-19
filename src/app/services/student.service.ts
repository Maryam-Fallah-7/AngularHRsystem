import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { students } from '../Models/students';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class StudentServicez extends SharedService<students>{

  constructor(public http:HttpClient) {
    super(http," http://localhost:3000/students");   }
}
