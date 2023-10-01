import {
  CourseInterface, CoursesListInterface,
  PositionInterface,
  QuestionInterface,
  SchoolDescriptionInterface,
  SchoolInterface, SearchListInterface, UniversityInterface
} from "./interfaces";

export class QuestionClass implements QuestionInterface {
  answer_str: string;
  id: string;
  question_str: string;
  constructor(id: string, question_str: string, answer_str: string) {
    this.id = id;
    this.question_str = question_str;
    this.answer_str = answer_str;
  }
}

export class SchoolDescriptionClass implements SchoolDescriptionInterface {
  faculty: string;
  website: string;
  constructor(faculty: string, website: string) {
    this.faculty = faculty;
    this.website = website;
  }
}

export class SchoolClass implements SchoolInterface {
  description: SchoolDescriptionClass;
  name: string;
  constructor(name: string, description: SchoolDescriptionInterface) {
    this.name = name;
    this.description = new SchoolDescriptionClass(description.faculty, description.website);
  }
}

export class PositionClass implements PositionInterface {
  position: string;
  schools: SchoolClass[];
  constructor(position: string, schools: SchoolInterface[]) {
    this.position = position;
    this.schools = schools.map((el) => new SchoolClass(el.name, el.description));
  }
}

export class UniversityClass implements UniversityInterface {
  city: string;
  courseOfStudy: number;
  courses: any;
  id: string;
  level: string;
  postgraduate: number;
  type: string;
  universityName: string;
  constructor(id: string, level: string, postgraduate: number, type: string, universityName: string, city: string, courseOfStudy: number, courses: any) {
    this.id = id;
    this.level = level;
    this.postgraduate = postgraduate;
    this.type = type;
    this.universityName = universityName;
    this.city = city;
    this.courseOfStudy = courseOfStudy;
    this.courses = courses;
  }
}

export class SearchListClass implements SearchListInterface {
  list: UniversityClass[];
  constructor(list: UniversityInterface[]) {
    this.list = list.map((el) => new UniversityClass(el.id, el.level, el.postgraduate, el.type, el.universityName, el.city, el.courseOfStudy, el.courses))
  }
}

export class CourseClass implements CourseInterface {
  id: any;
  name: string;
  constructor(id: any, name: string) {
    this.id = id;
    this.name = name;
  }
}

export class CoursesListClass implements CoursesListInterface {
  list: CourseInterface[];
  constructor(list: CourseInterface[]) {
    this.list = list.map((el) => new CourseClass(el.id, el.name));
  }
}
