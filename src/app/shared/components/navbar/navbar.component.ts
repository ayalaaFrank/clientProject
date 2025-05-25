import { Component } from '@angular/core';
import { AuthService } from '@core/auth/auth.service';
import { Router } from '@angular/router'; // הוסיפי ייבוא זה

@Component({
  selector: 'app-navbar',
  template: `
    <nav>
      <a routerLink="/home" *ngIf="auth.isLoggedIn()">בית</a>
      <a routerLink="/employees" *ngIf="auth.isLoggedIn()">עובדים</a>
      <a routerLink="/courses" *ngIf="auth.isLoggedIn()">קורסים</a>
      <a (click)="logout()" *ngIf="auth.isLoggedIn()">התנתק</a>
      <!-- <a routerLink="/login" *ngIf="!auth.isLoggedIn()">התחבר</a> -->
    </nav>
  `,
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(public auth: AuthService, private router: Router) {} // הוסיפי את ה-router כאן

  logout() {
    this.auth.logout();
    this.router.navigate(['']);
  }
}