export interface WorkSummary {
  summaryId: number;
  employeeCode: string;
  courseCode: string;
  month?: number;
  year?: number;
  workHours?: number;
  hourlyRate?: number;
  travelCount?: number;
  travelRate?: number;
  totalPayment?: number;
}