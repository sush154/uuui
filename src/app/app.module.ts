import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpModule } from '@angular/http';
import { LoadersCssModule } from 'angular2-loaders-css';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './routing/routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ErrorComponent } from './error/error.component';
import { ReviewListComponent } from './review-list/review-list.component';
import { ReviewDetailsComponent } from './review-details/review-details.component';
import { AddReviewComponent } from './add-review/add-review.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    ErrorComponent,
    ReviewListComponent,
    ReviewDetailsComponent,
    AddReviewComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    LoadersCssModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
