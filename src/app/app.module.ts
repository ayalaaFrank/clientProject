import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './features/login/login.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { EmployeesListComponent } from './features/employees/employees-list/employees-list.component';
import { EmployeeDetailComponent } from './features/employees/employee-detail/employee-detail.component';
import { CoursesListComponent } from './features/courses/courses-list/courses-list.component';
import { CourseDetailComponent } from './features/courses/course-detail/course-detail.component';
import { ReportsListComponent } from './features/reports/reports-list/reports-list.component';
import { PermissionPipe } from './shared/pipes/permission.pipe';
import { HomeComponent } from './features/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    EmployeesListComponent,
    EmployeeDetailComponent,
    CoursesListComponent,
    CourseDetailComponent,
    ReportsListComponent,
    PermissionPipe,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }