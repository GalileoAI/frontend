import { Component, signal } from '@angular/core';

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

  activeQuestionIndex = signal(0);

  prevQuestion() {
    if (this.activeQuestionIndex() === 0) {
      return;
    }
    
    this.activeQuestionIndex.set(this.activeQuestionIndex() - 1);
  }

  nextQuestion() {
    this.activeQuestionIndex.set(this.activeQuestionIndex() + 1);
  }
}
