import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { IState, IAction } from '../types/index';
import { GET_DATA, UPDATE_VIEW, UPDATE_QUESTION, UPDATE_RESULT } from './constants';

const initialState: IState = {
  data: [],
  view: 'INTRO',
  questions: [],
  count: 0,
  result: 0,
}


const reducer = (state: IState = initialState, action: IAction): IState => {

  const { type, view, data } = action;

  switch (type) {

    case GET_DATA:
      return {
        ...state
      }

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

    case UPDATE_RESULT:
      return {
        ...state,
      }

    default:
      return state
  }
}

export const store = createStore(
  reducer,
  applyMiddleware(thunk)
)
