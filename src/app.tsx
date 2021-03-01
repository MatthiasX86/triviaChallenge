import React from 'react';
import {connect} from 'react-redux';
import {IState, IView} from './types';
import Intro from './views/intro';

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
      <span>this is the questions view</span>
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
