import {Component, OnInit} from '@angular/core';
import {FormType} from "../../model/types";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PositionClass, QuestionClass} from "../../model/classes";
import {FormInterface, ResponseInterface} from "../../model/interfaces";
import {QuestionsService} from "../../services/questions.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-have-plan',
  templateUrl: './have-plan.component.html',
  styleUrls: ['./have-plan.component.scss'],
})
export class HavePlanComponent implements OnInit{
  readonly type: FormType = 'after';
  formQuestions = new FormGroup({});
  questionsList: QuestionClass[] = [];
  hasResults = false;
  positionsList: PositionClass[] = [];

  tempQuestions = {
    header: 'questionare',
    questions: [
      {
        "id": "1",
        "question_str": "Jakie są Twoje pasje i zainteresowania?",
        "answer_str": ""
      },
      {
        "id": "2",
        "question_str": "Jakie Twoje umiejętności i zdolności wydają Ci się wyróżniające?",
        "answer_str": ""
      },
      {
        "id": "3",
        "question_str": "Które przedmioty w szkole sprawiają Ci najwiecej kłopotów i nie czujesz się w nich dobrze?",
        "answer_str": ""
      },
      {
        "id": "4",
        "question_str": "Czy istnieją zawody lub dziedziny, które Cię szczególnie fascynują?",
        "answer_str": ""
      },
      {
        "id": "5",
        "question_str": "Czy jesteś zmotywowana/y poświęcić czas i wysiłek na zdobywanie wiedzy?",
        "answer_str": ""
      },
      {
        "id": "6",
        "question_str": "Czy masz w głowie cele / marzenia, które chciałabyś / chciałbyś osiągnąć?",
        "answer_str": ""
      },
      {
        "id": "7",
        "question_str": "Czy planujesz zdobywać wykształcenie wyższe, uczęszczać na kursy zawodowe czy może rozważasz alternatywne ścieżki kariery?",
        "answer_str": ""
      },
    ]
  } as FormInterface
  tempResponse = {
    header: 'recommendation',
    positions: [
      {
        position: "test1",
        schools: [
          {
            name: 'Szkoła testowa',
            description: {
              faculty: 'testowy fakulty',
              website: 'www'
            }
          },
          {
            name: 'Szkoła testowa2',
            description: {
              faculty: 'testowy fakulty',
              website: 'www'
            }
          },
          {
            name: 'Szkoła testowa3',
            description: {
              faculty: 'testowy fakulty',
              website: 'www'
            }
          }
        ]
      },
      {
        position: "test2",
        schools: [
          {
            name: 'Lorem ipsum',
            description: {
              faculty: 'testowy fakulty',
              website: 'www'
            }
          },
          {
            name: 'Lorem ipsum2',
            description: {
              faculty: 'testowy fakulty',
              website: 'www'
            }
          },
          {
            name: 'Lorem ipsum3',
            description: {
              faculty: 'testowy fakulty',
              website: 'www'
            }
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

  getData(e: QuestionClass[])
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

  private postAnswers(data: QuestionClass[]): Observable<ResponseInterface> {
    console.log('data', data);
    const tmp = data.map((el) => {
      console.log('el', el)
    });
    const body = {
      header: this.type,
      questions: data
    } as FormInterface;
    return this.questionsService.postAnswers(body);
  }
}
