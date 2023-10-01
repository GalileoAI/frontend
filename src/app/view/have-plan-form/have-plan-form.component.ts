import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
  signal,
} from '@angular/core';
import { Observable, take } from 'rxjs';
import {
  FormInterface,
  QuestionInterface,
  ResponseInterface,
} from '../../model/interfaces';
import { QuestionClass } from '../../model/classes';
import { FormType } from '../../model/types';
import { QuestionsService } from '../../services/questions.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-have-plan-form',
  templateUrl: './have-plan-form.component.html',
  styleUrls: ['./have-plan-form.component.scss'],
})
export class HavePlanFormComponent implements OnInit, OnChanges {
  @Input() activeQuestionIndex = 0;

  @ViewChild('scrollable', { read: ElementRef }) public scrollable?: ElementRef<any>;

  questionsList: QuestionClass[] = [
    {
      answer_str: 'asdasdasd',
      id: '1',
      question_str:
        'Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam?',
    },
    {
      answer_str: 'asdasdasd',
      id: '1',
      question_str:
        'Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam?',
    },
    {
      answer_str: 'asdasdasd',
      id: '2',
      question_str:
        'Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam?',
    },
    {
      answer_str: 'asdasdasd',
      id: '2',
      question_str:
        'Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam?',
    },
    {
      answer_str: 'asdasdasd',
      id: '2',
      question_str:
        'Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam?',
    },
  ];

  @Output()
  sendRequestEmitter = new EventEmitter<boolean>();

  form = new FormGroup({});

  constructor(
    private questionsService: QuestionsService,
    private fb: FormBuilder,
    private scroller: ViewportScroller
  ) {}

  ngOnInit() {
    this.getQuestionsList().subscribe({
      next: (data) => {
        this.questionsList = data.questions.map(
          (el) => new QuestionClass(el.id, el.question_str, el.answer_str)
        );
        this.questionsList.forEach((q) => {
          this.form.addControl(
            q.id,
            this.fb.control('', [Validators.required, Validators.max(250)])
          );
        });
      },
    });

    this.postAnswers().subscribe({
      next: (val) => {
        console.log('I have a plan! post', val);
      },
    });
  }

  ngOnChanges(change: SimpleChanges) {
    if (change['activeQuestionIndex']) {
      this.scrollable?.nativeElement.scrollTo({ left: (this.scrollable?.nativeElement.scrollLeft + 540), behavior: 'smooth' });
    }
  }

  private getQuestionsList(): Observable<FormInterface> {
    return this.questionsService.getQuestionsList('after');
  }

  private postAnswers(): Observable<ResponseInterface> {
    return this.questionsService.postAnswers({});
  }

  send() {
    this.sendRequestEmitter.emit(true);
  }
}
