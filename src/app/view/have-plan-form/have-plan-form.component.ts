import {Component, EventEmitter, Input, Output, signal} from '@angular/core';
import {QuestionClass} from "../../model/classes";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-have-plan-form',
  templateUrl: './have-plan-form.component.html',
  styleUrls: ['./have-plan-form.component.scss']
})
export class HavePlanFormComponent{
  activeQuestionIndex = signal(1);
  @Output()
  sendRequestEmitter = new EventEmitter<QuestionClass[]>();

  @Input()
  formList: FormGroup = new FormGroup({});

  @Input()
  questionsList: QuestionClass[] = [];

  constructor() {
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
