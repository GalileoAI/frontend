import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {FormInterface, ResponseInterface} from "../../model/interfaces";
import {QuestionsService} from "../../services/questions.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PositionClass, QuestionClass} from "../../model/classes";
import {FormType} from "../../model/types";

@Component({
  selector: 'app-surprise-me',
  templateUrl: './surprise-me.component.html',
  styleUrls: ['./surprise-me.component.scss']
})
export class SurpriseMeComponent implements OnInit{
  readonly type: FormType = 'before';
  formQuestions = new FormGroup({});
  questionsList: QuestionClass[] = [];
  hasResults = false;
  positionsList: PositionClass[] = [];

  tempQuestions = {
    header: 'questionare',
    questions: [
      {
        id: '1',
        question_str: 'Pytanie 1',
        answer_str: ''
      },
      {
        id: '2',
        question_str: 'Pytanie 2',
        answer_str: ''
      },
      {
        id: '3',
        question_str: 'Pytanie 3',
        answer_str: ''
      }
    ]
  } as FormInterface
  tempResponse = {
    header: 'answers',
    positions: [
      {
        position: "test1",
        schools: [
          {
            name: 'Szkoła testowa',
            description: 'Opis testowy'
          },
          {
            name: 'Szkoła testowa2',
            description: 'Opis testowy2'
          },
          {
            name: 'Szkoła testowa3',
            description: 'Opis testowy3'
          }
        ]
      },
      {
        position: "test2",
        schools: [
          {
            name: 'Lorem ipsum',
            description: 'Opis testowy2'
          },
          {
            name: 'Lorem ipsum2',
            description: 'Opis testowy22'
          },
          {
            name: 'Lorem ipsum3',
            description: 'Opis testowy23'
          }
        ]
      }
    ]
  } as ResponseInterface

  constructor(private questionsService: QuestionsService, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.getQuestionsList().subscribe({
      next: (data) => {
        this.questionsList =
          data.questions.map((el) =>
            new QuestionClass(el.id, el.question_str, el.answer_str));
        this.questionsList.forEach(
          (q) => {
            this.formQuestions.addControl(q.id,
              this.fb.control('', [Validators.required, Validators.max(250)])
            );
          }
        );
      },
      error: (err) => {
        console.error('Wystąpił błąd podczas pobierania listy pytań', err);
        if (this.questionsList.length < 1)
        {
          this.questionsList = this.tempQuestions.questions.map((el) =>
            new QuestionClass(el.id, el.question_str, el.answer_str));
        }
        this.questionsList.forEach(
          (q) => {
            this.formQuestions.addControl(q.id,
              this.fb.control('', [Validators.required, Validators.max(250)])
            );
          }
        );
      }
    });
  }

  getData(e: object)
  {
    this.hasResults = true;
    this.postAnswers(e).subscribe({
      next: (data) => {
        this.positionsList = data.positions.map((el) => new PositionClass(el.position, el.schools));
      },
      error: (err) => {
        console.error('Wystąpił błąd podczas pobierania wyników', err);
        if (this.positionsList.length < 1)
        {
          this.positionsList = this.tempResponse.positions.map((el) => new PositionClass(el.position, el.schools));
        }
      }
    })
  }

  private getQuestionsList(): Observable<FormInterface> {
    return this.questionsService.getQuestionsList(this.type);
  }

  private postAnswers(data: object): Observable<ResponseInterface> {
    const body = {
      type: this.type,
      ...data
    };
    return this.questionsService.postAnswers(body);
  }

}
