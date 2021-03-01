import React from 'react';
import {connect} from 'react-redux';
import {IState, IView} from './types';
import Intro from './views/intro';
import Questions from './views/questions';
import Results from './views/results';

interface IApp {
  view: IView;
}

const App: FunctionComponent<IApp> = ({ view }) => (
  <>
    {view === 'INTRO' && (
      <Intro />
    )}

    {view === 'QUESTION' && (
      <Questions />
    )}

    {view === 'COMPLETED' && (
      <Results />
    )}
  </>
)

const mapStateToProps = ( state: IState ) => ({
  view: state.view,
});

export default connect(mapStateToProps)(App);
