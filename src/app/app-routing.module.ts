import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './student/add/add.component';
import { EditComponent } from './student/edit/edit.component';
import { ListComponent } from './student/list/list.component';
import { AddTeacherComponent } from './teacher/add-teacher/add-teacher.component';
import { EditTeacherComponent } from './teacher/edit-teacher/edit-teacher.component';
import { ListTeacherComponent } from './teacher/list-teacher/list-teacher.component';


const routes: Routes = [
  {path:'listStudents',component:ListComponent},
 {path:'addstudent',component:AddComponent},
 {path:'editstudent/:id',component:EditComponent},
 {path:'listteachers',component:ListTeacherComponent},
 {path:'addteacher',component:AddTeacherComponent},
 {path:'editteacher/:id',component:EditTeacherComponent},
 {path:'home',component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
