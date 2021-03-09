import * as actionTypes from './actionTypes.js';

const initialState = {
    navSliderOpen: false
}

const uiReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.NAV_SLIDER_OPENED:
            return {
                navSliderOpen: true //I think 'state' in this case is local to the 
            }                               //reducer, not the whole store

        case actionTypes.NAV_SLIDER_CLOSED:
            // return {
            //     ...state,
            //     uiReducer: {
            //         ...state.uiReducer,
            //         navSliderOpen: action.payload
            //     }
            // }
            return{
                navSliderOpen: action.payload
            }

        default: 
            return state;
    }
}

export { uiReducer }