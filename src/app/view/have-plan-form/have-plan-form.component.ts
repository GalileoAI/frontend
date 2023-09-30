import {Component, OnInit} from '@angular/core';
import {Observable, take} from "rxjs";
import {FormInterface, QuestionInterface} from "../../model/interfaces";
import {QuestionClass} from "../../model/classes";
import {FormType} from "../../model/types";
import {QuestionsService} from "../../services/questions.service";

@Component({
  selector: 'app-have-plan-form',
  templateUrl: './have-plan-form.component.html',
  styleUrls: ['./have-plan-form.component.scss']
})
export class HavePlanFormComponent implements OnInit{
  questionsList: QuestionClass[] = [];

  constructor(private questionsService: QuestionsService) {
  }

  ngOnInit() {
    this.getQuestionsList('after').subscribe({
      next: (data) => {
        this.questionsList =
          data.questions.map((el) =>
            new QuestionClass(el.id, el.question_str, el.answer_str));
      }
    });
  }

  private getQuestionsList(type: FormType): Observable<FormInterface> {
    return this.questionsService.getQuestionsList('after');
  }

}
