import * as actionTypes from './actionTypes.js'

export const navSliderOpened = () =>{
    return{
        type: actionTypes.NAV_SLIDER_OPENED,
        payload: true
    }
}

export const navSliderClosed = () => {
    return{
        type: actionTypes.NAV_SLIDER_CLOSED,
        payload: false
    }
}