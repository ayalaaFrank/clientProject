import { Component } from '@angular/core';
import { ReportService } from 'src/app/core/services/report.service';
import { WorkSummary } from 'src/app/core/models/workSummary.model';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent {
  reports: WorkSummary[] = [];
  loading = false;
  error: string | null = null;

  selectedMonth: number = new Date().getMonth() + 1;
  selectedCourseId: string = '';
  selectedEmployeeId: string = '';

  currentMode: 'month' | 'course' | 'employee' | null = null;

  constructor(private reportService: ReportService) {}

  selectMode(mode: 'month' | 'course' | 'employee') {
    this.currentMode = mode;
    this.error = null;
    this.reports = [];
  }

  getReportsByMonth(): void {
  if (this.selectedMonth < 1 || this.selectedMonth > 12) {
    this.error = 'אנא הכנס חודש תקין בין 1 ל-12';
    return;
  }

  this.loading = true;
  this.error = null;
  this.reportService.getReportsByMonth(this.selectedMonth).subscribe({
    next: (data: WorkSummary[]) => {
      console.log('Month Reports:', data); // ← בדיקה חשובה
      this.reports = data;
      this.loading = false;
    },
    error: (err) => {
      this.error = 'שגיאה בטעינת הדוחות לפי חודש';
      console.error(err); // ← חשוב!
      this.loading = false;
    }
  });
}


  getReportsByCourse(): void {
    if (!this.selectedCourseId.trim()) {
      this.error = 'אנא הכנס קוד קורס';
      return;
    }

    this.loading = true;
    this.error = null;

    this.reportService.getReportsByCourse(this.selectedCourseId).subscribe({
      next: (data: WorkSummary[]) => {
        this.reports = data;
        this.loading = false;
      },
      error: () => {
        this.error = 'שגיאה בטעינת הדוחות לפי קורס';
        this.loading = false;
      }
    });
  }

  getReportsByEmployee(): void {
    if (!this.selectedEmployeeId.trim()) {
      this.error = 'אנא הכנס תעודת זהות של עובד';
      return;
    }

    this.loading = true;
    this.error = null;

    this.reportService.getReportsByEmployee(this.selectedEmployeeId).subscribe({
      next: (data: WorkSummary[]) => {
        this.reports = data;
        this.loading = false;
      },
      error: () => {
        this.error = 'שגיאה בטעינת הדוחות לפי עובד';
        this.loading = false;
      }
    });
  }
}
