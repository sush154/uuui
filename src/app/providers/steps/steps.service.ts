import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { URL } from '../../util/app.service';
import {} from 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class StepsService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private serviceUrl = URL + '/steps';

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  constructor(private http: Http) { }

  /** Get count of all steps by all participants */
  getAllStepsCount(): Promise<any> {
    const url = this.serviceUrl + '/getAllStepsCount';

    return this.http
      .get(url, {headers: this.headers, withCredentials: true})
      .toPromise()
      .then(res => res.json().data)
      .catch(err => this.handleError(err));
  }

  /** Get total steps of current user */
  getTotalStepsCurrentUser(): Promise<any> {
    const url = this.serviceUrl + '/getTotalStepsCurrentUser';

    return this.http
      .get(url, {headers: this.headers, withCredentials: true})
      .toPromise()
      .then(res => res.json().data)
      .catch(err => this.handleError(err));
  }

  /** Get Current Leader */
  getCurrentLeader(): Promise<any> {
    const url = this.serviceUrl + '/getCurrentLeader';

    return this.http
      .get(url, {headers: this.headers, withCredentials: true})
      .toPromise()
      .then(res => res.json().data)
      .catch(err => this.handleError(err));
  }

  /** Get Current User's steps */
  getUserCurrentSteps(): Promise<any> {
    const url = this.serviceUrl + '/getUserCurrentSteps';

    return this.http
      .get(url, {headers: this.headers, withCredentials: true})
      .toPromise()
      .then(res => res.json().data)
      .catch(err => this.handleError(err));
  }

  /** Get current user's daily steps */
  getUserDailySteps(): Promise<any> {
    const url = this.serviceUrl + '/getUserDailySteps';

    return this.http
      .get(url, {headers: this.headers, withCredentials: true})
      .toPromise()
      .then(res => res.json().data)
      .catch(err => this.handleError(err));
  }

  /** Get rankings of all users */
  getRankings(): Promise<any> {
    const url = this.serviceUrl + '/getRankings';

    return this.http
      .get(url, {headers: this.headers, withCredentials: true})
      .toPromise()
      .then(res => res.json().data)
      .catch(err => this.handleError(err));
  }

  /** Get list of Pending approvals */
  getPendingApprovals(): Promise<any> {
    const url = this.serviceUrl + '/getPendingApprovals';

    return this.http
      .get(url, {headers: this.headers, withCredentials: true})
      .toPromise()
      .then(res => res.json().data)
      .catch(err => this.handleError(err));
  }

  /** Get lit of approvals with status rejected */
  getRejectedApprovals(): Promise<any> {
    const url = this.serviceUrl + '/getRejectedApprovals';

    return this.http
      .get(url, {headers: this.headers, withCredentials: true})
      .toPromise()
      .then(res => res.json().data)
      .catch(err => this.handleError(err));
  }

  /** Get list of approved reviews */
  getApprovedReviews(): Promise<any> {
    const url = this.serviceUrl + '/getApprovedReviews';

    return this.http
      .get(url, {headers: this.headers, withCredentials: true})
      .toPromise()
      .then(res => res.json().data)
      .catch(err => this.handleError(err));
  }

  /** Get details of selected review */
  getReviewDetails(submissionId: string): Promise<any> {
    const url = this.serviceUrl + '/getReviewDetails/' + submissionId;

    return this.http
      .get(url, {headers: this.headers, withCredentials: true})
      .toPromise()
      .then(res => res.json().data)
      .catch(err => this.handleError(err));
  }

  /** Approve the selected reviews */
  approve(approvedObj: any): Promise<any> {
    const url = this.serviceUrl + '/approve';

    return this.http
      .post(url, JSON.stringify(approvedObj), {headers: this.headers, withCredentials: true})
      .toPromise()
      .then(res => res.json().data)
      .catch(err => this.handleError(err));
  }

  /** Reject the selected review */
  reject(rejectionObj: any): Promise<any> {
    const url = this.serviceUrl + '/reject';

    return this.http
      .post(url, JSON.stringify(rejectionObj), {headers: this.headers, withCredentials: true})
      .toPromise()
      .then(res => res.json().data)
      .catch(err => this.handleError(err));
  }

  /** Submission for approval */
  submitForApproval(submissionObj: any): Promise<any> {
    const url = this.serviceUrl + '/submitForApproval';

    return this.http
      .post(url, JSON.stringify(submissionObj), {headers: this.headers, withCredentials: true})
      .toPromise()
      .then(res => res.json().data)
      .catch(err => this.handleError(err));
  }
}
