import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { TokenInterceptor } from './core/auth/token.interceptor';
import { ReportsComponent } from './features/reports/reports.component';


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
    ReportsComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }