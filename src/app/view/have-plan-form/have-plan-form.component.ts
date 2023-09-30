import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../services/api.service";
import {Observable, take} from "rxjs";
import {HttpHeaders, HttpParams} from "@angular/common/http";
import {FormInterface, QuestionInterface} from "../../model/interfaces";
import {QuestionClass} from "../../model/classes";

@Component({
  selector: 'app-have-plan-form',
  templateUrl: './have-plan-form.component.html',
  styleUrls: ['./have-plan-form.component.scss']
})
export class HavePlanFormComponent implements OnInit{
  questionsList: QuestionClass[] = [];

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.getQuestionsList().subscribe({
      next: (data) => {
        this.questionsList =
          data.questions.map((el) =>
            new QuestionClass(el.id, el.question_str, el.answer_str));
      }
    });
  }

  private getQuestionsList(): Observable<FormInterface> {
    const url = `localhost:8000`;
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    const params = new HttpParams();
    const body = {};
    /*TODO zmienić nazwę klucza*/
    params.set('key','have-plan');
    const options = {params};
    return this.apiService.putData<FormInterface>(url, body, params).pipe(take(1));
  }

}
