import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { IState, IAction } from '../types/index';
import {
  UPDATE_VIEW,
  UPDATE_QUESTION,
  ANSWER_QUESTION,
  RESET
} from './constants';

const initialState: IState = {
  view: 'INTRO',
  questions: [],
  count: 0,
  result: 0,
}


const reducer = (state: IState = initialState, action: IAction): IState => {

  const { type, view, data, count, isCorrect, questions } = action;

  switch (type) {

    case UPDATE_VIEW:

      return {
        ...state,
        view,
      }

    case UPDATE_QUESTION:
      return {
        ...state,
        questions: data
      }

    case ANSWER_QUESTION:

      const newQuestionsArray = [ ...state.questions ];

      newQuestionsArray[count].solved = isCorrect;

      return {
        ...state,
        count: count + 1,
        questions: newQuestionsArray,
        result: isCorrect ? state.result + 1 : state.result
      }

    case RESET:
      console.log('got here at the final')
      return {
        ...initialState,
      }

    default:
      return state
  }
}

export const store = createStore(
  reducer,
  applyMiddleware(thunk)
)
