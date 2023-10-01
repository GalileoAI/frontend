import { Injectable } from '@angular/core';
import {FormType} from "../model/types";
import {Observable, take} from "rxjs";
import {FormInterface, ResponseInterface} from "../model/interfaces";
import {HttpHeaders, HttpParams, HttpRequest} from "@angular/common/http";
import {ApiService} from "./api.service";

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  public static readonly QUESTIONS_GET_API_URL = 'https://activity-merry-principal-least.trycloudflare.com/app/get';
  public static readonly QUESTIONS_POST_API_URL = 'https://activity-merry-principal-least.trycloudflare.com/app/post';

  constructor(private apiService: ApiService) { }

  public getQuestionsList(type: FormType): Observable<FormInterface> {
    const url = QuestionsService.QUESTIONS_GET_API_URL;
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    const options = {headers};
    return this.apiService.getData<FormInterface>(url, options).pipe(take(1));
  }

  public postAnswers(body: object): Observable<ResponseInterface> {
    const url = QuestionsService.QUESTIONS_POST_API_URL;
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    const params = new HttpParams();
    const options = {params};
    return this.apiService.postData<ResponseInterface>(url, body, options).pipe();
  }
}
