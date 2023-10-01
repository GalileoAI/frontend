import {Component, Input, ViewChild} from '@angular/core';
import {PositionClass} from "../../model/classes";
import {ColumnMode, DatatableComponent} from "@swimlane/ngx-datatable";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent {
  @Input()
  positionsList: PositionClass[] = [];
  ColumnMode = ColumnMode;

  @ViewChild('table')
  table: DatatableComponent = {} as DatatableComponent;

}
