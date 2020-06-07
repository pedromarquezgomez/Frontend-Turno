import { Component } from '@angular/core';
import { UserI } from 'src/app/models/users.interface';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  user: UserI = {
    username: '',
    password: '',
  };

  constructor(private loginService: LoginService, private router: Router) {}

  login() {
  this.loginService.login(this.user).subscribe(data => {
    this.loginService.setToken(data.access_token);
    console.log(data);
    this.router.navigateByUrl('/home');
  });
  }
}
