import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import io from 'socket.io-client';
import reducer from './reducer';
import App from './components/App';
import {ResultsContainer} from './components/Results';
import {VotingContainer} from './components/Voting';

const store = createStore(reducer);
// store.dispatch({
//   type: 'SET_STATE',
//   state: {
//     vote: {
//       pair: ['Javascript', 'HTML5'],
//       tally: {Javascript: 2},
//       title: 'Favorite Language to Program In?'
//     }
//   }
// });

const socket = io(`${location.protocol}//${location.hostname}:8088`);
socket.on('state', state =>
  store.dispatch({type: 'SET_STATE', state})
);

const routes = <Route component={App}>
  <Route path="/results" component={ResultsContainer} />
  <Route path="/" component={VotingContainer} />
</Route>

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>{routes}</Router>
  </Provider>,
  document.getElementById('app')
);
