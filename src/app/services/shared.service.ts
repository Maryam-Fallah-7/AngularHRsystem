import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, Type } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { students } from '../Models/students';

@Injectable({
  providedIn: 'root'
})
export class SharedService <Type> {

  // API_URL=" http://localhost:3000/students";
  constructor(public http:HttpClient,@Inject(String) public API_URL:string) { }

 getStudents() :Observable<Type>
 {
  return this.http.get<Type>(this.API_URL);
 }
 getStudentsById(id) :Observable<Type>{
  return this.http.get<Type>(this.API_URL+`/${id}`);
 }

 postStudents(object:Type) :Observable<Type>
 {
  return this.http.post<Type>(this.API_URL,object);
 }

 deleteStudent(id) :Observable<Type>
 {
 return this.http.delete<Type>(this.API_URL +`/${id}`);
 }

 updateStudent(id,obj:Type) :Observable<Type>
 {
  return this.http.put<Type>(this.API_URL+`/${id}`,obj);
 }


}
