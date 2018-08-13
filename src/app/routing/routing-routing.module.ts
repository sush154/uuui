import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { ErrorComponent } from '../error/error.component';
import { ReviewListComponent } from '../review-list/review-list.component';
import { ReviewDetailsComponent } from '../review-details/review-details.component';
import { AddReviewComponent } from '../add-review/add-review.component';
import { NotFoundComponent } from '../not-found/not-found.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'review-list', component: ReviewListComponent},
  { path: 'review-details/:submissionId', component: ReviewDetailsComponent},
  { path: 'add-review', component: AddReviewComponent},
  { path: 'error', component: ErrorComponent},
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingRoutingModule { }
