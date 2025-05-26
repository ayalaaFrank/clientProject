import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/core/services/employee.service';
import { Employee } from 'src/app/core/models/employee.model';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.html',
  styleUrls: ['./employee-detail.css']
})
export class EmployeeDetailComponent implements OnInit {
  employee: Employee = this.createEmptyEmployee();
  isNewEmployee: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      // עדכון עובד קיים
      this.isNewEmployee = false;
      this.getEmployeeDetails(id);
    } else {
      // יצירת עובד חדש
      this.isNewEmployee = true;
      // כבר הגדרנו employee כעובד ריק (למלא טופס חדש)
    }
  }

  createEmptyEmployee(): Employee {
    return {
      id: '',
      code: '',
      fullName: '',
      email: '',
      passwordHash: '',
      phone: '',
      isAdmin: false
    };
  }

  getEmployeeDetails(id: string): void {
    this.employeeService.getEmployeeById(id).subscribe(
      (data: Employee) => {
        this.employee = data;
      },
      (error) => {
        console.error('Error fetching employee details', error);
      }
    );
  }

  onSubmit(): void {
    if (this.isNewEmployee) {
      this.employeeService.addEmployee(this.employee).subscribe(
        () => {
          alert('העובד נוסף בהצלחה');
          this.router.navigate(['/employees']);
        },
        (error) => {
          console.error('Error adding employee', error);
        }
      );
    } else {
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

  deleteEmployee(): void {
    if (!this.isNewEmployee && confirm('האם את בטוחה שברצונך למחוק את העובד?')) {
      this.employeeService.deleteEmployee(this.employee.id.toString()).subscribe(
        () => {
          alert('העובד נמחק בהצלחה');
          this.router.navigate(['/employees']);
        },
        (error) => {
          console.error('Error deleting employee', error);
        }
      );
    }
  }
}
