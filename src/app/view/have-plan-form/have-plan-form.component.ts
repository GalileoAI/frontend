import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Observable, take} from "rxjs";
import {FormInterface, QuestionInterface, ResponseInterface} from "../../model/interfaces";
import {QuestionClass} from "../../model/classes";
import {FormType} from "../../model/types";
import {QuestionsService} from "../../services/questions.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-have-plan-form',
  templateUrl: './have-plan-form.component.html',
  styleUrls: ['./have-plan-form.component.scss']
})
export class HavePlanFormComponent implements OnInit{
  questionsList: QuestionClass[] = [];
  @Output()
  sendRequestEmitter = new EventEmitter<boolean>();

  form = new FormGroup({});

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
            this.form.addControl(q.id,
              this.fb.control('', [Validators.required, Validators.max(250)])
            );
          }
        );
      }
    });

    this.postAnswers().subscribe({
      next: (val) => {
        console.log('I have a plan! post', val)
      }
    });
  }

  private getQuestionsList(): Observable<FormInterface> {
    return this.questionsService.getQuestionsList('after');
  }

  private postAnswers(): Observable<ResponseInterface> {
    return this.questionsService.postAnswers();
  }

  send()
  {
    this.sendRequestEmitter.emit(true);
  }

}
