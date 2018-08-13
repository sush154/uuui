import { Component, OnInit } from '@angular/core';
import { LoginService } from '../providers/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  loading = false;
  userName: string;
  password: string;

  constructor(private loginService: LoginService,
              private router: Router) { }

  ngOnInit() {
  }

  public login() {
    this.loading = true;
    this.loginService.login(this.userName, this.password).then(res => {
      this.loading = false;
      console.log(res);
      res.status === 200 ? this.router.navigate(['/dashboard']) :
        this.router.navigate(['/error']);
    });
  }

}
