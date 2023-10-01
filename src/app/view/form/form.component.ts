import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import {QuestionClass} from "../../model/classes";
import {FormBuilder, FormGroup} from "@angular/forms";
import {QuestionsService} from "../../services/questions.service";
import {ViewportScroller} from "@angular/common";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnChanges {
  @Input() activeQuestionIndex = 0;

  @ViewChild('scrollable', { read: ElementRef })
  public scrollable?: ElementRef<any>;

  constructor(
    private questionsService: QuestionsService,
    private fb: FormBuilder,
    private scroller: ViewportScroller
  ) {}

  @Output()
  sendRequestEmitter = new EventEmitter<QuestionClass[]>();

  @Input()
  formList: FormGroup = new FormGroup({});

  @Input()
  questionsList: QuestionClass[] = [];

  ngOnChanges(change: SimpleChanges) {
    if (change['activeQuestionIndex']) {
      if (
        change['activeQuestionIndex'].currentValue >
        change['activeQuestionIndex'].previousValue
      ) {
        this.scrollable?.nativeElement.scrollTo({
          left: this.scrollable?.nativeElement.scrollLeft + 540,
          behavior: 'smooth',
        });
      }

      if (
        change['activeQuestionIndex'].currentValue <
        change['activeQuestionIndex'].previousValue
      ) {
        this.scrollable?.nativeElement.scrollTo({
          left: this.scrollable?.nativeElement.scrollLeft - 540,
          behavior: 'smooth',
        });
      }
    }
  }


  send()
  {
    const rnp = Object.entries(this.formList.value).map(
      ([key, value]) => {
        const tmp = this.questionsList.find((q) => q.id === key)!;
        tmp.answer_str = value as string;
        return tmp;
      }
    )
    this.sendRequestEmitter.emit(rnp);
  }

}
