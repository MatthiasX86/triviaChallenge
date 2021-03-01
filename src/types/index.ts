export interface IActive {
  active: boolean;
}

export interface IHandle {
  clickHandle: () => void;
}

export interface IQuestion {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
  number: number;
}

export type IView = 'INTRO' | 'QUESTION' | 'COMPLETED';

export interface IActionView {
  type: 'UPDATE_VIEW';
  newView: IView;
}

export interface IActionQuestion {
  type: 'UPDATE_QUESTION';
}

export interface IActionResult {
  type: 'UPDATE_RESULT'
}

export type IAction = IActionView & IActionQuestion & IActionResult;

export interface IState {
  readonly view: IView;
  readonly questions: IQuestion[];
  readonly count: number; 
  readonly result: number;
}
