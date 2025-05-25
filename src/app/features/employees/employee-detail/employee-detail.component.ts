import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/core/services/employee.service';
import { Employee } from 'src/app/core/models/employee.model';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.html',
  styleUrls: ['./employee-detail.css']
})
export class EmployeeDetailComponent implements OnInit {
  employee: Employee | null = null;
  employeeId!: number;

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    this.employeeId = Number(this.route.snapshot.paramMap.get('id'));
    this.getEmployeeDetails();
  }

  getEmployeeDetails(): void {
    this.employeeService.getEmployeeById(this.employeeId).subscribe(
      (data: Employee) => {
        this.employee = data;
      },
      (error) => {
        console.error('Error fetching employee details', error);
      }
    );
  }

  updateEmployee(): void {
    if (this.employee) {
      this.employeeService.updateEmployee(this.employee).subscribe(
        () => {
          alert('העובד עודכן בהצלחה');
        },
        (error) => {
          console.error('Error updating employee', error);
        }
      );
    }
  }
}