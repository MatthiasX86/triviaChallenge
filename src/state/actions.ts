import { IView, IActionView } from '../types/index';

export const updateView = ( view: IView ): IActionView => ({
  type: 'UPDATE_VIEW',
  newView: view,
})
