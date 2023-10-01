import {Component, EventEmitter, Input, Output} from '@angular/core';
import {QuestionClass} from "../../model/classes";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-surprise-me-form',
  templateUrl: './surprise-me-form.component.html',
  styleUrls: ['./surprise-me-form.component.scss']
})
export class SurpriseMeFormComponent{

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
