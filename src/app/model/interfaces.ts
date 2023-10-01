// wyślij zpytanie o listę pytań
// wyślij odpowiedzi z wypełnionego formularza
// lub wyślij zapytania o treść pytań
export interface FormInterface {
  header: string;
  questions: QuestionInterface[]
}

export interface QuestionInterface {
  id: string,
  question_str: string;
  answer_str: string;
}

export interface PositionInterface {
  position: string;
  schools: SchoolInterface[];
}

export interface SchoolDescriptionInterface {
  faculty: string;
  website: string;
}

export interface SchoolInterface {
  name: string;
  description: SchoolDescriptionInterface;
}

export interface ResponseInterface {
  header: string;
  positions: PositionInterface[];
}

export interface UniversityInterface {
  universityName: string;
  id: string;
  courseOfStudy: number;
  postgraduate: number;
  level: string;
  type: string;
  city: string;
  courses: any;
}

export interface SearchListInterface {
  list: UniversityInterface[];
}

export interface CourseInterface {
  name: string;
  id: any
}

export interface CoursesListInterface {
  list: CourseInterface[];
}
