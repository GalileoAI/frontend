import { Injectable } from '@angular/core';
import {Observable, take} from "rxjs";
import {ApiService} from "./api.service";
import {HttpHeaders, HttpParams} from "@angular/common/http";
import {ElementsListInterface, SearchListInterface, TERCListInterface} from "../model/interfaces";

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  readonly SEARCH_RESULTS_API_URL = 'https://aplikacje.edukacja.gov.pl/api/internal-data-hub/public/opi/university/search';
  readonly COURSES_API_URL = 'https://aplikacje.edukacja.gov.pl/api/internal-data-hub/public/opi/university/dictionary/';
  readonly LEVELS_API_URL = 'https://aplikacje.edukacja.gov.pl/api/internal-data-hub/public/opi/university/dictionary/level';
  readonly UNIVERSITES_API_URL = 'https://aplikacje.edukacja.gov.pl/api/internal-data-hub/public/opi/university/dictionary/university';
  readonly CITIES_API_URL = 'https://aplikacje.edukacja.gov.pl/api/internal-data-hub/public/opi/university/dictionary/cities';
  readonly VOIVODESHIPS_API_URL = 'https://aplikacje.edukacja.gov.pl/api/teryt/v1/terc/voivodeships';
  readonly SCHOOL_TYPE_API_URL = 'https://aplikacje.edukacja.gov.pl/api/internal-data-hub/public/opi/university/dictionary/brand';
  readonly COURSE_FORM_API_URL = 'https://aplikacje.edukacja.gov.pl/api/internal-data-hub/public/opi/university/dictionary/form';

  constructor(private apiService: ApiService) { }

  getSearchList(criteria: any[] = []): Observable<SearchListInterface>
  {
    const url = this.SEARCH_RESULTS_API_URL;
    const headers = new HttpHeaders();
    const body = {
      criteria
    };
    const params = new HttpParams();
    const options = {headers, params};
    return this.apiService.postData<SearchListInterface>(url, body, options).pipe(take(1));
  }

  getCoursesList(): Observable<ElementsListInterface>
  {
    const url = this.COURSES_API_URL;
    const headers = new HttpHeaders();
    const params = new HttpParams();
    const options = {headers, params};
    return this.apiService.getData<ElementsListInterface>(url, options).pipe(take(1));
  }

  getLevelsList(): Observable<ElementsListInterface>
  {
    const url = this.LEVELS_API_URL;
    const headers = new HttpHeaders();
    const params = new HttpParams();
    const options = {headers, params};
    return this.apiService.getData<any>(url, options).pipe(take(1));
  }

  getUniversitiesList(): Observable<ElementsListInterface>
  {
    const url = this.UNIVERSITES_API_URL;
    const headers = new HttpHeaders();
    const params = new HttpParams();
    const options = {headers, params};
    return this.apiService.getData<any>(url, options).pipe(take(1));
  }

  getCitiesList(): Observable<ElementsListInterface>
  {
    const url = this.CITIES_API_URL;
    const headers = new HttpHeaders();
    const params = new HttpParams();
    const options = {headers, params};
    return this.apiService.getData<any>(url, options).pipe(take(1));
  }

  getCourseFormList(): Observable<ElementsListInterface>
  {
    const url = this.COURSE_FORM_API_URL;
    const headers = new HttpHeaders();
    const params = new HttpParams();
    const options = {headers, params};
    return this.apiService.getData<any>(url, options).pipe(take(1));
  }

  getVoivideshipsList(): Observable<TERCListInterface>
  {
    const url = this.VOIVODESHIPS_API_URL;
    const headers = new HttpHeaders();
    const params = new HttpParams();
    const options = {headers, params};
    return this.apiService.getData<TERCListInterface>(url, options).pipe(take(1));
  }

  getSchoolTypeList(): Observable<ElementsListInterface>
  {
    const url = this.SCHOOL_TYPE_API_URL;
    const headers = new HttpHeaders();
    const params = new HttpParams();
    const options = {headers, params};
    return this.apiService.getData<any>(url, options).pipe(take(1));
  }
}
