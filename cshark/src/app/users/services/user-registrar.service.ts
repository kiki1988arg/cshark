import { user } from 'app/users/models/user';
import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Observable";

@Injectable()
export class UserRegistrarService {
  private Url = 'http://localhost:8090/api/usuario';
   private Url2 = 'http://localhost:8090/api/usuario/registrarse';
  private headers = new Headers({ 'Content-Type': 'application/json' });
  constructor(private http: Http) { }

  getUsers(): Observable<user[]> {
     return this.http.get(this.Url)
      .map(this.extractData)
       .catch(this.handleError);
  }
   createUser(user: user): Observable<user> {    
    let options = new RequestOptions({ headers: this.headers });
    return this.http.post(this.Url2, JSON.stringify(user), options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  private extractData(res: Response) {
    let body = res.json(); 
    console.log(body);
    return body|| {};
  }
 
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
