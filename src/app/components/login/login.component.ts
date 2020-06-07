import { Component } from '@angular/core';
import { UserI } from 'src/app/models/users.interface';
import { LoginService } from 'src/app/services/login.service';

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

  constructor(private loginService: LoginService) {}

  login() {
  this.loginService.login(this.user).subscribe(data => {
    this.loginService.setToken(data.access_token);
    console.log(data);
  });
  }
}
