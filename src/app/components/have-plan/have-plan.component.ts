import { Component } from '@angular/core';

@Component({
  selector: 'app-have-plan',
  templateUrl: './have-plan.component.html',
  styleUrls: ['./have-plan.component.scss'],
})
export class HavePlanComponent {
  hasResults = false;

  getData(e: boolean) {
    this.hasResults = true;
  }
}
