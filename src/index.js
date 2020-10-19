import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware  } from 'redux';
import thunk from 'redux-thunk';
import App from './App';
import rootReducer from './store';
import 'assets/scss/simple-grid.scss';

ReactDOM.render(
    <Provider store={createStore(rootReducer, applyMiddleware(thunk))}>
        <App />
    </Provider>,
    document.getElementById('root')
);
