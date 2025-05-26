import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/auth/auth.guard';
import { EmployeesListComponent } from './features/employees/employees-list/employees-list.component';
import { EmployeeDetailComponent } from './features/employees/employee-detail/employee-detail.component';
import { CoursesListComponent } from './features/courses/courses-list/courses-list.component';
import { CourseDetailComponent } from './features/courses/course-detail/course-detail.component';
import { ReportsListComponent } from './features/reports/reports-list/reports-list.component';
import { LoginComponent } from './features/login/login.component';
import { HomeComponent } from './features/home/home.component';
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'employees', component: EmployeesListComponent, canActivate: [AuthGuard] },
  { path: 'employees/add', component: EmployeeDetailComponent, canActivate: [AuthGuard] },
  { path: 'employees/:id', component: EmployeeDetailComponent, canActivate: [AuthGuard] },
  { path: 'courses', component: CoursesListComponent, canActivate: [AuthGuard] },
  { path: 'courses/:id', component: CourseDetailComponent, canActivate: [AuthGuard] },
  { path: 'reports', component: ReportsListComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }