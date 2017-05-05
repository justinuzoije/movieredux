import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reducer from './MovieWidget.reducer';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import ReduxThunk from 'redux-thunk';
import MovieWidgetContainer from './MovieWidgetContainer';

const store = Redux.createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  Redux.applyMiddleware(ReduxThunk)
);


ReactDOM.render(
  <ReactRedux.Provider store={store}>
  <div>
    <MovieWidgetContainer/>
  </div>
  </ReactRedux.Provider>,
  document.getElementById('root')
);
