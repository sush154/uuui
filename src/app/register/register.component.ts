import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../providers/register/register.service';
import { ToasterService } from 'angular2-toaster';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [RegisterService, ToasterService]
})
export class RegisterComponent implements OnInit {

  name: string;
  email: string;
  password: string;
  loading = false;
  registrationOutput = false;

  constructor(private router: Router,
              private registerService: RegisterService,
              private toaster: ToasterService) { }

  ngOnInit() {
  }

  public register() {
    this.loading = true;
    const data = {
      'name': this.name,
      'email': this.email,
      'password': this.password
    };

    this.registerService.register(data).then(res => {
      this.loading = false;
      if (res.status === 200) {
        this.registrationOutput = true;
      } else if (res.status === 101) {
        this.registrationOutput = false;
        this.toaster.pop('error', 'User Already Registerd!', 'User credenttials are already registered with us');
      } else {
        this.registrationOutput = false;
        this.router.navigate(['/error']);
      }
    });
  }

}
