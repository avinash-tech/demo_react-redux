/**
 * @About
 * 
 * 
 */

import {
    IS_LOADING_STOP,
    IS_LOADING_START,
} from "../action/Types";

const initalState = {
    isLoading: false
}

// for loading state
export const loading = (state = initalState, action) => {
    switch (action.type) {

        case IS_LOADING_START:
            return {
                ...state,
                isLoading: true
        }
        case IS_LOADING_STOP:
            return {
                ...state,
                isLoading: false
            }

        default:
            return state

    }
}


