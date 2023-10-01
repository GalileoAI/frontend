import {Component, Input, ViewChild} from '@angular/core';
import {PositionClass} from "../../model/classes";
import {ColumnMode, DatatableComponent} from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-surprise-me-result',
  templateUrl: './surprise-me-result.component.html',
  styleUrls: ['./surprise-me-result.component.scss']
})
export class SurpriseMeResultComponent{

  @Input()
  positionsList: PositionClass[] = [];
  ColumnMode = ColumnMode;

  @ViewChild('table')
  table: DatatableComponent = {} as DatatableComponent;

}
