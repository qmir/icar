import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory, Route, Link } from 'react-router';
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import registerServiceWorker from './registerServiceWorker';
import { Home, Constructor, Author, TokenSale, Terms } from './components'
import { allReducers } from './components/reducers';



const initialState = {
  name: 'username1',
  wallet: 'wallet1',
  privateKey: 'privateKey1',
}


function showUser(state=initialState, action) {
  if (action.type === 'SIGN_IN') {
    return {
      name: [action.payload],
      wallet: [action.payload],
      privateKey: [action.payload],
    }
  }
  return state
}

const store = createStore(allReducers);
const history = syncHistoryWithStore(browserHistory, store);
// выполнение функции кажды раз, когда меняется store
store.subscribe(()=>{
  console.log('subscribe', store.getState());
})

//store.dispatch({type: 'SING_IN', payload: 'Data'})


ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Home}/>
      <Route path="/tokensale" component={TokenSale}/>
      <Route path="/terms" component={Terms}/>
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
