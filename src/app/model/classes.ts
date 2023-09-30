import {QuestionInterface} from "./interfaces";

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
