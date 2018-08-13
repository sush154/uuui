import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StepsService } from '../providers/steps/steps.service';
import { CMSUrl } from '../util/app.service';
import { Location } from '@angular/common';
import { ToasterService } from 'angular2-toaster';
import { UtilService } from '../util/app.util';

@Component({
  selector: 'app-review-details',
  templateUrl: './review-details.component.html',
  styleUrls: ['./review-details.component.scss'],
  providers: [StepsService, ToasterService, UtilService]
})
export class ReviewDetailsComponent implements OnInit {

  loading = false;
  reviewDetails: any;
  loggedInUserId: string;
  comment: string;

  constructor(private stepsService: StepsService,
              private router: Router,
              private currentRoute: ActivatedRoute,
              private location: Location,
              private toastr: ToasterService,
              private utilService: UtilService) { }

  getReviewDetails(submissionId: string) {
    this.loading = true;
    this.stepsService.getReviewDetails(submissionId).then(res => {
      this.loading = false;
      if (res.status === 200) {
        this.reviewDetails = res.review;
      } else if (res.status === 401) {
        this.router.navigate(['/login']);
      } else {
        this.router.navigate(['/error']);
      }
    });
  }

  getImage(imagePath: string) {
    return CMSUrl + '/getImg/' + imagePath;
  }

  goBack() {
    this.location.back();
  }

  approve() {
    const data = {
      'submissionId': this.reviewDetails._id,
      'todaysSteps': this.reviewDetails.todaysSteps,
      'submittedBy': this.reviewDetails.submittedBy
    };

    this.stepsService.approve(data).then(res => {
      if (res.status === 200) {
        this.toastr.pop('success', 'Approved', 'Your request is approved !');
        this.goBack();
      } else if (res.status === 401) {
        this.router.navigate(['/login']);
      } else {
        this.router.navigate(['/error']);
      }
    });
  }

  reject() {
    const data = {
      'submissionId': this.reviewDetails._id,
      'rejecterUserId': this.loggedInUserId,
      'comment': this.comment
    };

    this.stepsService.reject(data).then(res => {
      if (res.status === 200) {
        this.toastr.pop('success', 'Rejected', 'The request has been rejected');
        this.goBack();
      } else if (res.status === 401) {
        this.router.navigate(['/login']);
      } else {
        this.router.navigate(['/error']);
      }
    });
  }

  ngOnInit() {
    this.currentRoute.params.subscribe(param => {
      this.getReviewDetails(param['submissionId']);
    });
    this.loggedInUserId = this.utilService.getCookies()[0].split('=')[1].split('-')[1];
  }

}
