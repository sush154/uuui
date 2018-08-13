import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import {} from 'rxjs/add/operator/toPromise';
import { URL } from '../../util/app.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: Http) { }

  private headers = new Headers({'Content-Type': 'application/json'});
  private serviceUrl = URL + '/auth';

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  public authenticate(): Promise<any> {
    const url = this.serviceUrl;

    return this.http
      .get(url, {headers: this.headers, withCredentials: true})
      .toPromise()
      .then(res => res.json().data)
      .catch(err => this.handleError(err));
  }
}
