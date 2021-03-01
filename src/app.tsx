import React from 'react';
import {connect} from 'react-redux';
import {IState, IView} from './types';
import Intro from './views/intro';
import Questions from './views/questions';

interface IApp {
  view: IView;
}

const App: FunctionComponent<IApp> = ({ view }) => (
  <>
    {console.log('the view is: ', view)}

    {view === 'INTRO' && (
      <Intro />
    )}

    {view === 'QUESTION' && (
      <Questions />
    )}

    {view === 'COMPLETED' && (
      <Intro />
    )}
  </>
)

const mapStateToProps = ( state: IState ) => ({
  view: state.view,
});

export default connect(mapStateToProps)(App);
