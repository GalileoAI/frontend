import {FormType} from "../../model/types";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CoursesListClass, PositionClass, QuestionClass, SearchListClass, UniversityClass} from "../../model/classes";
import {CoursesListInterface, FormInterface, ResponseInterface, SearchListInterface} from "../../model/interfaces";
import {QuestionsService} from "../../services/questions.service";
import {Observable} from "rxjs";
import {Component, OnInit, signal} from '@angular/core';
import {SearchService} from "../../services/search.service";

@Component({
  selector: 'app-have-plan',
  templateUrl: './have-plan.component.html',
  styleUrls: ['./have-plan.component.scss'],
})
export class HavePlanComponent implements OnInit{
  readonly type: FormType = 'after';
  formQuestions = new FormGroup({});
  universitiesList: UniversityClass[] = [];
  coursesList: any[] = [];
  hasResults = false;
  positionsList: PositionClass[] = [];

  constructor(private searchService: SearchService) {
  }

  ngOnInit() {
    this.getUniveritiesList().subscribe({
      next: (data) => {
        this.universitiesList = new SearchListClass(data.list).list;
      }
    });
    this.getCoursesList().subscribe({
      next: (data) => {
        this.coursesList = new CoursesListClass(data.list).list;
      }
    })
  }

  getData(e: QuestionClass[])
  {
    this.hasResults = true;
  }

  private getUniveritiesList(): Observable<SearchListClass> {
    return this.searchService.getSearchList();
  }

  private getCoursesList(): Observable<CoursesListClass> {
    return this.searchService.getCoursesList();
  }

/*  private postAnswers(data: QuestionClass[]): Observable<ResponseInterface> {
    console.log('data', data);
    const tmp = data.map((el) => {
      console.log('el', el)
    });
    const body = {
      header: this.type,
      questions: data
    } as FormInterface;
    return this.questionsService.postAnswers(body);
  }*/

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
