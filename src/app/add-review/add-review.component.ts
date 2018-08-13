import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { ToasterService } from 'angular2-toaster';
import { StepsService } from '../providers/steps/steps.service';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.scss'],
  providers: [ToasterService, StepsService]
})
export class AddReviewComponent implements OnInit {

  loading = false;
  steps: number;

  constructor(private location: Location,
              private router: Router,
              private toaster: ToasterService,
              private stepsService: StepsService) { }

  goBack() {
    this.location.back();
  }

  ngOnInit() {
  }

}
