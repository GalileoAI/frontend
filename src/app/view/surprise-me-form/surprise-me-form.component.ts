import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {QuestionClass} from "../../model/classes";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-surprise-me-form',
  templateUrl: './surprise-me-form.component.html',
  styleUrls: ['./surprise-me-form.component.scss']
})
export class SurpriseMeFormComponent{

  /*TODO poprawić typ danych*/
  @Output()
  sendRequestEmitter = new EventEmitter<object>();

  @Input()
  formList: FormGroup = new FormGroup({});

  @Input()
  questionsList: QuestionClass[] = [];

  constructor() {
  }

  send()
  {
    this.sendRequestEmitter.emit(this.formList.value);
  }

}
