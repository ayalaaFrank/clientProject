import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/core/services/course.service';
import { Course } from 'src/app/core/models/course.model';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {
  courses: Course[] = [];
  showAddForm = false;
  newCourse: Partial<Course> = { courseId: '', courseName: '', courseType: '' };
  isAdminUser = false;
  editMode: boolean = false;

  constructor(
    private courseService: CourseService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.loadCourses();
    this.authService.getUserInfo().subscribe(user => {
      this.isAdminUser = !!user.isAdmin;
    });
  }

  loadCourses() {
    this.courseService.getCourses().subscribe(courses => {
      this.courses = courses || [];
    });
  }

  addCourse() {
    console.log('newCourse:', this.newCourse);
    if (this.editMode) {

      // עדכון קורס קיים
      this.courseService.updateCourse(this.newCourse as Course).subscribe({
        next: () => {
          this.loadCourses();
          this.resetForm();
        },
        error: () => {
          alert('שגיאה בעדכון קורס');
        }
      });
    } else {
      // הוספת קורס חדש
      this.courseService.addCourse(this.newCourse as Course).subscribe({
        next: () => {
          this.loadCourses();
          this.resetForm();
        },
        error: () => {
          alert('שגיאה בהוספת קורס');
        }
      });
    }
  }

  editCourse(course: Course) {
    this.editMode = true;
    this.showAddForm = true;
    this.newCourse = { ...course }; 
  }

  resetForm() {
    this.newCourse = { courseId: '', courseName: '', courseType: '' };
    this.editMode = false;
    this.showAddForm = false;

  }

  deleteCourse(id: string) {
    this.courseService.deleteCourse(id).subscribe(() => {
      this.courses = this.courses.filter(c => c.courseId !== id);
    });
  }

  isAdmin(): boolean {
    return this.isAdminUser;
  }

  toggleAddForm() {
    if (this.showAddForm) {
      this.resetForm();
    } else {
      this.showAddForm = true;
      this.editMode = false;
      this.newCourse = { courseId: '', courseName: '', courseType: '' };
    }
  }
}