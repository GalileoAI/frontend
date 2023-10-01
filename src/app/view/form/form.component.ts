import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { QuestionClass } from '../../model/classes';
import { FormBuilder, FormGroup } from '@angular/forms';
import { QuestionsService } from '../../services/questions.service';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnChanges {
  @Input() activeQuestionIndex = 0;

  @ViewChild('scrollable', { read: ElementRef })
  public scrollable?: ElementRef<any>;

  @Output()
  sendRequestEmitter = new EventEmitter<QuestionClass[]>();

  @Input()
  formList: FormGroup = new FormGroup({});

  @Input()
  questionsList: QuestionClass[] = [];

  ngOnChanges(change: SimpleChanges) {
    const index = change['activeQuestionIndex'];
    if (index) {
      if (index.currentValue > index.previousValue) {
        this.scrollable?.nativeElement.scrollTo({
          left: this.scrollable?.nativeElement.scrollLeft + 545,
          behavior: 'smooth',
        });

        return;
      }

      if (index.currentValue < index.previousValue) {
        this.scrollable?.nativeElement.scrollTo({
          left: this.scrollable?.nativeElement.scrollLeft - 545,
          behavior: 'smooth',
        });

        return;
      }
    }
  }

  send() {
    const rnp = Object.entries(this.formList.value).map(([key, value]) => {
      const tmp = this.questionsList.find((q) => q.id === key)!;
      tmp.answer_str = value as string;
      return tmp;
    });
    this.sendRequestEmitter.emit(rnp);
  }
}
