import { Component, OnInit } from '@angular/core';
import { StepsService } from '../providers/steps/steps.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.scss'],
  providers: [StepsService]
})
export class ReviewListComponent implements OnInit {

  loading = false;
  reviewsList = [];
  imagePath: string;

  constructor(private stepsService: StepsService,
              private router: Router) { }


  getPendingReviewsList() {

  }

  ngOnInit() {
  }

}
