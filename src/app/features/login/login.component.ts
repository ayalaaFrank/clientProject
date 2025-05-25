import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';
  error = '';

  constructor(private router: Router, private http: HttpClient) {}

  login() {
    this.error = '';
    this.http.post<any>('https://localhost:7132/api/Auth/login', {
      username: this.username,
      password: this.password
    }).subscribe({
      next: (res) => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('isAdmin', res.isAdmin); // לצורך הרשאות
        this.router.navigate(['/home']);
      },
      error: () => {
        this.error = 'שם משתמש או ססימה שגויים';
      }
    });
  }
}
