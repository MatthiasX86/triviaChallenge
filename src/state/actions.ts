import {
  IView,
  IActionView,
  IData,
  IResponse,
  IActionQuestion,
  IActionAnswer
} from '../types/index';

import {
  UPDATE_QUESTION,
  UPDATE_VIEW,
  ANSWER_QUESTION,
  RESET
} from './constants';



export const updateView = ( view: IView ): IActionView => ({
  type: UPDATE_VIEW,
  view,
});

export const updateQuestions = ( data: IData[] ): IActionQuestion => ({
  type: UPDATE_QUESTION,
  data,
});

export const answerQuestion = ( count: number, isCorrect: boolean): IActionAnswer => ({
  type: ANSWER_QUESTION,
  count,
  isCorrect
})

export const resetChallenge = () => ({
  type: RESET,
})

const getData = () => fetch('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean');

export const getQuestionsData = () => dispatch => getData()
  .then( response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return response.json()
  })
  .then( ( data: IResponse ) => {
    dispatch( updateQuestions(data.results) )
  })
