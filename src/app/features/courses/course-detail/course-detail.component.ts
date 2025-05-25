import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '@core/services/course.service';
import { Course } from '@core/models/course.model';

@Component({
  selector: 'app-course-detail',
  template: `
    <div *ngIf="isLoading">טוען...</div>
    <div *ngIf="!isLoading && course">
      <h2>עריכת קורס</h2>
      <form (ngSubmit)="updateCourse()">
        <label>שם קורס:
          <input [(ngModel)]="course.courseName" name="courseName" required>
        </label>
        <label>סוג:
          <select [(ngModel)]="course.courseType" name="courseType" required>
            <option value="שנתי">שנתי</option>
            <option value="חצי שנתי">חצי שנתי</option>
          </select>
        </label>
        <button type="submit">שמור</button>
      </form>
    </div>
  `
})
export class CourseDetailComponent implements OnInit {
  courseId!: string;
  course!: Course;
  isLoading: boolean = true;

  constructor(
    private courseService: CourseService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.courseId = this.route.snapshot.params['id'];
    this.loadCourseDetails();
  }

  loadCourseDetails() {
    this.courseService.getCourseById(this.courseId).subscribe(
      (data) => {
        this.course = data;
        this.isLoading = false;
      },
      (error) => {
        console.error('Error loading course details', error);
        this.isLoading = false;
      }
    );
  }

  updateCourse() {
    this.courseService.updateCourse(this.course).subscribe(
      () => {
        alert('Course updated successfully');
      },
      (error) => {
        console.error('Error updating course', error);
      }
    );
  }
}