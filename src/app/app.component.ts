import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './providers/auth/auth.service';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
  styleUrls: ['./app.component.css'],
  providers: [AuthService]
})
export class AppComponent implements OnInit {
  title = '10K QAS';
  loading = false;

  constructor(private router: Router,
              private authProider: AuthService) {}

  ngOnInit() {
    this.loading = true;
    this.authProider.authenticate().then(res => {
      this.loading = false;
      res.status === 200 ? this.router.navigate(['/dashboard']) : this.router.navigate(['/login']);
    });
  }
}
