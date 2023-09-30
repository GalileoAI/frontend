import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getData<T>(url: string, options: object = {}): Observable<T> {
    return this.http.get<T>(url, options);
  }

  postData(url: string, body: object, options: object): Observable<any> {
    return this.http.post(url, body, options);
  }

}
