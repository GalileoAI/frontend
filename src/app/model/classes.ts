import {PositionInterface, QuestionInterface, ResponseInterface, SchoolInterface} from "./interfaces";

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

export class SchoolClass implements SchoolInterface {
  description: string;
  name: string;
  constructor(name: string, description: string) {
    this.name = name;
    this.description = description;
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
