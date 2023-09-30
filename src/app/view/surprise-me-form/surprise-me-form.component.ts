import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {QuestionClass} from "../../model/classes";
import {QuestionsService} from "../../services/questions.service";
import {FormType} from "../../model/types";
import {Observable} from "rxjs";
import {FormInterface, ResponseInterface} from "../../model/interfaces";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-surprise-me-form',
  templateUrl: './surprise-me-form.component.html',
  styleUrls: ['./surprise-me-form.component.scss']
})
export class SurpriseMeFormComponent implements OnInit{
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
        console.log('surprise me! post', val)
      }
    });

  }

  private getQuestionsList(): Observable<FormInterface> {
    return this.questionsService.getQuestionsList('before');
  }

  private postAnswers(): Observable<ResponseInterface> {
    return this.questionsService.postAnswers({});
  }

  send()
  {
    this.sendRequestEmitter.emit(true);
  }

}
