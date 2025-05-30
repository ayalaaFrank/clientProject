import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WorkSummary } from '../models/workSummary.model'; // תקן את הנתיב אם צריך

@Injectable({
  providedIn: 'root',
})
export class ReportService {
  private apiUrl = 'https://localhost:7132/api/WorkSummary';

  constructor(private http: HttpClient) {}

  // קבלת כל הדוחות
  getAllReports(): Observable<WorkSummary[]> {
    return this.http.get<WorkSummary[]>(this.apiUrl);
  }

  // דוחות לפי משתמש (אם יש נקודת קצה מתאימה)
  getReportsByUser(): Observable<WorkSummary[]> {
    return this.http.get<WorkSummary[]>(`${this.apiUrl}/reporting-hours`);
  }

  // דוחות לפי קורס
  getReportsByCourse(courseId: string): Observable<WorkSummary[]> {
    return this.http.get<WorkSummary[]>(`${this.apiUrl}/ByCourse?courseId=${courseId}`);
  }

  // דוחות לפי חודש
  getReportsByMonth(month: number): Observable<WorkSummary[]> {
    return this.http.get<WorkSummary[]>(`${this.apiUrl}/ByMonth?month=${month}`);
  }

  // דוחות לפי עובד
  getReportsByEmployee(id: string): Observable<WorkSummary[]> {
    return this.http.get<WorkSummary[]>(`${this.apiUrl}/ByEmployee?id=${id}`);
  }
}
