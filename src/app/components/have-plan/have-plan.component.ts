import {FormType} from "../../model/types";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {
  ElementClass,
  ElementsListClass,
  PositionClass,
  QuestionClass,
  SearchListClass, TERCClass, TERCListClass,
  UniversityClass
} from "../../model/classes";
import {
  ElementsListInterface,
  FormInterface,
  ResponseInterface,
  SearchListInterface,
  TERCListInterface
} from "../../model/interfaces";
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
  formQuestions = new FormGroup({
    hobbies: new FormControl()
  });
  resultsList: UniversityClass[] = [];
  coursesList: ElementClass[] = [];
  universitiesList: ElementClass[] = [];
  levelsList: ElementClass[] = [];
  voivodeshipsList: TERCClass[] = [];
  courseFormList: ElementClass[] = [];
  schoolTypeList: ElementClass[] = [];
  citiesList: ElementClass[] = [];
  hasResults = false;
  positionsList: PositionClass[] = [];
  hobbiesList = new ElementsListClass([
    {
      name: 'administracja',
      id: ''
    },
    {
      name: 'chemia',
      id: ''
    },
    {
      name: 'biologia',
      id: ''
    },
    {
      name: 'automatyka',
      id: ''
    },
    {
      name: 'ekonomia',
      id: ''
    }
  ]);

  constructor(private searchService: SearchService, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.getResultsList().subscribe({
      next: (data) => {
        this.resultsList = new SearchListClass(data.list).list;
      }
    });
    this.getCoursesList().subscribe({
      next: (data) => {
        this.coursesList = new ElementsListClass(data.list).list;
      }
    });
    this.getLevelsList().subscribe({
      next: (data) => {
        this.levelsList = new ElementsListClass(data.list).list;
      }
    });
    this.getUniversitiesList().subscribe({
      next: (data) => {
        this.universitiesList = new ElementsListClass(data.list).list;
      }
    });
    this.getCitiesList().subscribe({
      next: (data) => {
        this.citiesList = new ElementsListClass(data.list).list;
      }
    });
    this.getCourseFormList().subscribe({
      next: (data) => {
        this.courseFormList = new ElementsListClass(data.list).list;
      }
    });
    this.getSchoolTypeList().subscribe({
      next: (data) => {
        this.schoolTypeList = new ElementsListClass(data.list).list;
      }
    });
    this.getVoivodeshipList().subscribe({
      next: (data) => {
        this.voivodeshipsList = new TERCListClass(data).list
      }
    });
  }

  getData(e: QuestionClass[])
  {
    this.hasResults = true;
  }

  private getResultsList(): Observable<SearchListInterface> {
    return this.searchService.getSearchList();
  }

  private getCoursesList(): Observable<ElementsListInterface> {
    return this.searchService.getCoursesList();
  }

  private getLevelsList(): Observable<ElementsListInterface> {
    return this.searchService.getLevelsList();
  }

  private getUniversitiesList(): Observable<ElementsListInterface> {
    return this.searchService.getUniversitiesList();
  }

  private getCitiesList(): Observable<ElementsListInterface> {
    return this.searchService.getCitiesList();
  }

  private getCourseFormList(): Observable<ElementsListInterface>{
    return this.searchService.getCourseFormList();
  }

  private getSchoolTypeList(): Observable<ElementsListInterface>{
    return this.searchService.getSchoolTypeList();
  }

  private getVoivodeshipList(): Observable<TERCListInterface> {
    return this.searchService.getVoivideshipsList();
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
