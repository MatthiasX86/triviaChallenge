export interface IActive {
  active: boolean;
}

export interface IHandle {
  clickHandle: () => void;
}

export interface IData {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export interface IResponse {
  response_code: number;
  results: IData[];
}

export interface IQuestion extends IData {
  count: number;
  solved?: boolean;
}

export type IView = 'INTRO' | 'QUESTION' | 'COMPLETED';

export interface IActionView {
  type: 'UPDATE_VIEW';
  view: IView;
}

export interface IActionQuestion {
  type: 'UPDATE_QUESTION';
  data: IData[];
}

export interface IActionAnswer {
  type: 'ANSWER_QUESTION';
  count: number;
  isCorrect: boolean; 
}

export interface IActionResult {
  type: 'UPDATE_RESULT';
}

export interface IActionReset {
  type: 'RESET';
}

export type IAction = IActionView & IActionQuestion & IActionResult;

export interface IState {
  readonly view: IView;
  readonly questions: IQuestion[];
  readonly count: number; 
  readonly result: number;
}
