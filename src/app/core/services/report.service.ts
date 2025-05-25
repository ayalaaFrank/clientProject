import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WorkSummary } from '../models/workSummary.model'; // החלף לנתיב המודל שלך

@Injectable({ providedIn: 'root' })
export class ReportService {
  private apiUrl = 'https://localhost:7132/api/WorkSummary'; // החלף לכתובת שלך

  constructor(private http: HttpClient) {}

  getAllReports(): Observable<WorkSummary[]> {
    return this.http.get<WorkSummary[]>(this.apiUrl);
  }

  getReportsByUser(): Observable<WorkSummary[]> {
    return this.http.get<WorkSummary[]>(`${this.apiUrl}/my`);
  }
}