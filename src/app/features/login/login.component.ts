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
        console.log('login response:', res); // הוסיפי שורה זו
        localStorage.setItem('token', res.token);
        localStorage.setItem(
          'isAdmin',
          (
            res.isAdmin === true ||
            res.isAdmin === 'true' ||
            res.isAdmin === 1 ||
            res.isAdmin === '1' ||
            res.isAdmin === 'True'
          ) ? 'true' : 'false'
        );
        this.router.navigate(['/home']);
      },
      error: () => {
        this.error = 'שם משתמש או סיסמה שגויים';
      }
    });
  }
}
