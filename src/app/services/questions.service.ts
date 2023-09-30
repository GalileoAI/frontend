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
  public static readonly QUESTIONS_API_URL = 'localhost:8000';

  constructor(private apiService: ApiService) { }

  public getQuestionsList(type: FormType): Observable<FormInterface> {
    const url = QuestionsService.QUESTIONS_API_URL;
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    const params = new HttpParams();
    const body = {};
    params.set('type', type);
    const options = {params};
    return this.apiService.putData<FormInterface>(url, body, params).pipe(take(1));
  }
}
