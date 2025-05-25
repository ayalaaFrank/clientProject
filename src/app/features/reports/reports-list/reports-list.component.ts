import { Component, OnInit } from '@angular/core';
import { ReportService } from '../../../core/services/report.service';
import { WorkSummary } from '../../../core/models/workSummary.model';
import { AuthService } from '../../../core/auth/auth.service';

@Component({
  selector: 'app-reports-list',
  templateUrl: './reports-list.html',
  styleUrls: ['./reports-list.css']
})
export class ReportsListComponent implements OnInit {
  reports: WorkSummary[] = [];

  constructor(
    private reportService: ReportService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loadReports();
  }

  loadReports(): void {
    // דוגמה: אם יש לך הרשאות מנהל, טען את כל הדוחות
    if (this.authService.isAdmin()) {
      this.reportService.getAllReports().subscribe((data: WorkSummary[]) => {
        this.reports = data;
      });
    } else {
      // אחרת, טען רק דוחות של המשתמש הנוכחי
      this.reportService.getReportsByUser().subscribe((data: WorkSummary[]) => {
        this.reports = data;
      });
    }
  }
}