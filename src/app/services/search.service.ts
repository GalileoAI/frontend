import { Injectable } from '@angular/core';
import {Observable, take} from "rxjs";
import {ApiService} from "./api.service";
import {HttpHeaders, HttpParams} from "@angular/common/http";
import {CoursesListInterface, SearchListInterface} from "../model/interfaces";

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  readonly UNIVERSITIES_API_URL = 'https://aplikacje.edukacja.gov.pl/api/internal-data-hub/public/opi/university/search';
  readonly COURSES_API_URL = 'https://aplikacje.edukacja.gov.pl/api/internal-data-hub/public/opi/university/dictionary/';
  constructor(private apiService: ApiService) { }

  getSearchList(criteria: any[] = []): Observable<SearchListInterface>
  {
    const url = this.UNIVERSITIES_API_URL;
    const headers = new HttpHeaders();
    const body = {
      criteria
    };
    const params = new HttpParams();
    const options = {headers, params};
    return this.apiService.postData<SearchListInterface>(url, body, options).pipe(take(1));
  }

  getCoursesList(): Observable<CoursesListInterface>
  {
    const url = this.COURSES_API_URL;
    const headers = new HttpHeaders();
    const params = new HttpParams();
    const options = {headers, params};
    return this.apiService.getData<any>(url, options).pipe();
  }
}
