import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {PositionClass} from "../../model/classes";
import {ColumnMode, DatatableComponent} from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-surprise-me-result',
  templateUrl: './surprise-me-result.component.html',
  styleUrls: ['./surprise-me-result.component.scss']
})
export class SurpriseMeResultComponent implements OnInit{

  @Input()
  positionsList: PositionClass[] = [];

  ColumnMode = ColumnMode;

  @ViewChild(DatatableComponent)
  table: DatatableComponent = {} as DatatableComponent;

  ngOnInit() {
  }

  updateFilter(event: any) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.positionsList.filter((d) => {
      return d.schools.filter((s) => {
        return s.name.toLowerCase().indexOf(val) !== -1 ||
          s.description.toLowerCase().indexOf(val) !== -1 ||
          !val
      });
    });

    // update the rows
    this.positionsList = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

}
