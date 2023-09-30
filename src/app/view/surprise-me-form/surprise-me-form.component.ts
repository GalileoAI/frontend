import {Component, OnInit} from '@angular/core';
import {QuestionClass} from "../../model/classes";
import {QuestionsService} from "../../services/questions.service";
import {FormType} from "../../model/types";
import {Observable} from "rxjs";
import {FormInterface} from "../../model/interfaces";

@Component({
  selector: 'app-surprise-me-form',
  templateUrl: './surprise-me-form.component.html',
  styleUrls: ['./surprise-me-form.component.scss']
})
export class SurpriseMeFormComponent implements OnInit{
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
