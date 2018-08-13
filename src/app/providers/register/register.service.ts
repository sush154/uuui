import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { URL } from '../../util/app.service';
import {} from 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private serviceUrl = URL + '/user/register';

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  constructor(private http: Http) { }

  register(data: any): Promise<any> {
    const url = this.serviceUrl;

    return this.http
      .post(url, JSON.stringify(data), {headers: this.headers, withCredentials: true})
      .toPromise()
      .then(res => res.json().data)
      .catch(err => this.handleError(err));
  }
}
