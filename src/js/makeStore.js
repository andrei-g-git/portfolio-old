import { createStore, combineReducers, compose } from 'redux';
import { postsReducer } from './postsReducer.js';
import { uiReducer } from './uiReducer.js';

export function makeStore(){
    const allReducers = combineReducers({
        postsReducer: postsReducer,
        uiReducer: uiReducer
    });

    return(
        createStore(
            allReducers,
            //for redux dev tools I think
            compose(typeof window === "object" &&
                typeof window.devToolsExtension !== "undefined" ?
                window.devToolsExtension() :
                f => f
            )
        )
    )
}