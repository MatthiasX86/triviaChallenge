import { IView, IActionView, IData, IResponse, IActionQuestion } from '../types/index';
import {UPDATE_QUESTION, UPDATE_VIEW} from './constants';


export const updateQuestions = ( data: IData[] ): IActionQuestion => ({
  type: UPDATE_QUESTION,
  data,
})

export const updateView = ( view: IView ): IActionView => ({
  type: UPDATE_VIEW,
  view,
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
    console.log('the data is: ', data)
    dispatch( updateQuestions(data.results) )
  })
