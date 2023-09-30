import { Injectable } from '@angular/core';
import {FormType} from "../model/types";
import {Observable, take} from "rxjs";
import {FormInterface} from "../model/interfaces";
import {HttpHeaders, HttpParams} from "@angular/common/http";
import {ApiService} from "./api.service";

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  public static readonly QUESTIONS_GET_API_URL = ' http://127.0.0.1:8000/app/get';
  public static readonly QUESTIONS_POST_API_URL = ' http://127.0.0.1:8000/app/post';

  constructor(private apiService: ApiService) { }

  public getQuestionsList(type: FormType): Observable<FormInterface> {
    const url = QuestionsService.QUESTIONS_GET_API_URL;
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    const params = new HttpParams();
    params.set('type', type);
    const options = {params};
    return this.apiService.getData<FormInterface>(url, params).pipe(take(1));
  }
}
