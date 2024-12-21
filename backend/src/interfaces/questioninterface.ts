export interface questionInterface {
  id?: number;
  quiz_id: number;
  question_title: string;
  question_choices: string[];
  correct_answer: Text;
}
