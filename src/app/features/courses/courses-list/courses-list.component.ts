import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/core/services/course.service';
import { Course } from 'src/app/core/models/course.model';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {
  courses: Course[] = [];

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.loadCourses();
  }

  loadCourses(): void {
    this.courseService.getCourses().subscribe(
      (data) => {
        this.courses = data;
        console.log('Courses loaded:', data); // בדוק אם זה מודפס
      },
      (error) => {
        console.error('Error loading courses', error);
      }
    );
  }

  deleteCourse(courseId: string): void {
    this.courseService.deleteCourse(courseId).subscribe(() => {
      this.loadCourses();
    });
  }
}