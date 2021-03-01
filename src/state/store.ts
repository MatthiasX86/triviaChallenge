import { createStore } from 'redux';
import { IState, IAction } from '../types/index';
import { UPDATE_VIEW, UPDATE_QUESTION, UPDATE_RESULT } from './constants';

const initialState: IState = {
  view: 'INTRO',
  questions: [],
  count: 0,
  result: 0,
}

const reducer = (state: IState = initialState, action: IAction): IState => {

  const { type, newView } = action;

  switch (type) {

    case UPDATE_VIEW:

      return {
        ...state,
        view: newView,
      }

    case UPDATE_QUESTION:
      return {
        ...state,
      }

    case UPDATE_RESULT:
      return {
        ...state,
      }

    default:
      return state
  }
}

export const store = createStore(reducer)
