// wyślij zpytanie o listę pytań
// wyślij odpowiedzi z wypełnionego formularza
// lub wyślij zapytania o treść pytań
export interface FormInterface {
  header: string;
  questions: QuestionInterface[]
}

// odbierz wynik po wysłaniu wypełnionego formularza
export interface ResponseInterface {

}

export interface QuestionInterface {
  id: string,
  question_str: string;
  answer_str: string;
}
