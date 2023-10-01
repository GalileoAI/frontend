import {Component, Input, ViewChild} from '@angular/core';
import {PositionClass} from "../../model/classes";
import {ColumnMode, DatatableComponent} from "@swimlane/ngx-datatable";

@Component({
  selector: 'app-have-plan-result',
  templateUrl: './have-plan-result.component.html',
  styleUrls: ['./have-plan-result.component.scss']
})
export class HavePlanResultComponent {
  @Input()
  positionsList: PositionClass[] = [];
  ColumnMode = ColumnMode;

  @ViewChild('table')
  table: DatatableComponent = {} as DatatableComponent;

}
