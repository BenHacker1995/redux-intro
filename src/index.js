import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger'; // Makes development easier

// This will increase or decrease a number, starts at 0 (default)
// Whatever we return is passed in as 'state' on the next function call
const counterReducer = ( state = 0, action ) => {
    // Filter down to specific action types
    if( action.type === 'ADD' ) {
        console.log( `Hey!!! I'm a reducer.`, action );
        // CANNOT do state ++
        // return the new state
        return state + 1;
        // nothing after a return is called
    }
    if( action.type === 'SUBTRACT' && state > 0 ) {
        return state - 1;
    }
    return state; // return the current state if no changes were made
}

const secondReducer = ( state = [], action ) => {
    console.log( `I'm a color reducer.` );
    if( action.type === 'ADD_COLOR' ) {
        return [ ...state, action.payload ]
    } if( action.type === 'ADD' ) {
        console.log( 'Will this log?' );
        // The answer is yes
    }
    if( action.type === 'DELETE_COLOR' ) {
        state = [];
        return state;
    }
    return state;
}

const storeInstance = createStore(
    // This is a reducer. This is called when the page loads or
    // when dispatch is called.
    combineReducers({
        counterReducer,
        secondReducer
    }),
    // applies redux logger to see states and actions
    applyMiddleware( logger )
);

ReactDOM.render(<Provider store={ storeInstance }>
<App /></Provider>, document.getElementById('root'));
registerServiceWorker();
