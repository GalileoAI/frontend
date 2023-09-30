import {Component, Input} from '@angular/core';
import {PositionClass} from "../../model/classes";

@Component({
  selector: 'app-surprise-me-result',
  templateUrl: './surprise-me-result.component.html',
  styleUrls: ['./surprise-me-result.component.scss']
})
export class SurpriseMeResultComponent {

  @Input()
  positionsList: PositionClass[] = [];

}
