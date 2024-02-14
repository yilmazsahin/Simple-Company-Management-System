import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  userType: string = '';
  constructor(private authService: AuthService, private router: Router) {}
  ngOnInit(): void {}
  login() {
    this.authService
      .login(this.email, this.password)
      .subscribe((response: any) => {
        if (response && response.success) {
          this.handleSuccessfulLogin();
        } else {
          // Giriş başarısız, hata işlemleri burada yapılabilir
        }
      });
    console.log(
      `Login attempt with email: ${this.email}, password: ${this.password}, user type: ${this.userType}`
    );
  }
  handleSuccessfulLogin() {
    this.router.navigate(['/customer']);
  }
}
