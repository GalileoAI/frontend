import {Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {PositionClass} from "../../model/classes";
import {ColumnMode, DatatableComponent} from "@swimlane/ngx-datatable";
import {Subject} from "rxjs";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit, OnDestroy{
  @Input()
  positionsList: PositionClass[] = [];
  ColumnMode = ColumnMode;
  @Input()
  loading = true;

  destroy$ = new Subject();

  @ViewChild('table')
  table: DatatableComponent = {} as DatatableComponent;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.destroy$.next(null);
    this.destroy$.complete();
  }

}
