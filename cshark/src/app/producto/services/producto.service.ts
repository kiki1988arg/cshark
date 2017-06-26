import { Producto } from './../models/producto';
import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Observable";

@Injectable()
export class ProductoService {
 private headers = new Headers({'Content-Type': 'application/json'
// , 'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImhvbGFAZ21haWwuY29tIiwibmJmIjoxNDk2MzcyNzg1LCJleHAiOjE0OTYzNzM5ODUsImlhdCI6MTQ5NjM3Mjc4NX0.YlRtLpRyenUMXUE_f_dI4Q7Y1IYt8LFLPOpeBPqtvAA'
});
  constructor(private http: Http) { }    
     getAllProducts(): Observable<Producto[]> {      
     return this.http.get("http://localhost:8090/api/producto", {headers: this.headers})
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
   getProduct(id: number): Observable<Producto> {
        const url = `http://localhost:8090/api/producto/`+id;
        return this.http.get(url)          
            .map(this.extractData)
            .catch(this.handleError);
    }
}
