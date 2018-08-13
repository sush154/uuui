import { Component, OnInit } from '@angular/core';
import { StepsService } from '../providers/steps/steps.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [StepsService]
})
export class DashboardComponent implements OnInit {

  loading = false;
  userTotalSteps: string;
  totalParticipantSteps: string;
  currentLeader: any;
  dailySteps = [];
  rankings = [];

  constructor(private stepsService: StepsService,
              private router: Router) { }

  getUserTotolSteps() {
    this.stepsService.getTotalStepsCurrentUser().then(res => {
      if (res.status === 200) {
        this.userTotalSteps = res.totalSteps.totalSteps;
      } else if (res.status === 401) {
        this.router.navigate(['/login']);
      } else {
        this.router.navigate(['/error']);
      }
    });
  }

  getTotalParticipantsSteps() {
    this.stepsService.getAllStepsCount().then(res => {
      if (res.status === 200) {
        this.totalParticipantSteps = res.count.totalSteps;
      } else if (res.status === 401) {
        this.router.navigate(['/login']);
      } else {
        this.router.navigate(['/error']);
      }
    });
  }

  getCurrentLeader() {
    this.stepsService.getCurrentLeader().then(res => {
      if (res.status === 200) {
        this.currentLeader = res.user;
      } else if (res.status === 401) {
        this.router.navigate(['/login']);
      } else {
        this.router.navigate(['/error']);
      }
    });
  }

  getUserDailySteps() {
    this.stepsService.getUserDailySteps().then(res => {
      if (res.status === 200) {
        this.dailySteps = res.dailySteps;
      } else if (res.status === 401) {
        this.router.navigate(['/login']);
      } else {
        this.router.navigate(['/error']);
      }
    });
  }

  getRankings() {
    this.stepsService.getRankings().then(res => {
      if (res.status === 200) {
        this.rankings = res.user;
      } else if (res.status === 401) {
        this.router.navigate(['/login']);
      } else {
        this.router.navigate(['/error']);
      }
    });
  }

  ngOnInit() {
    this.loading = true;
    this.getUserTotolSteps();
    this.getTotalParticipantsSteps();
    this.getCurrentLeader();
    this.getUserDailySteps();
    this.loading = false;
  }

}
