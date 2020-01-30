/**
 * @About
 * 
 */
import {
    GET_EMPLOYEE_DATA_FAILED,
    GET_EMPLOYEE_DATA_SUCCESS
} from '../../redux/action/Types'

const initialState = {
    empData: "",
}

// get All list users
export const employee = (state = initialState, action) => {
    if (action.payload)
        console.log("dddddddddddddddddddd", action.payload)
    switch (action.type) {

        case GET_EMPLOYEE_DATA_SUCCESS:
            return {
                ...state,
                ...action.payload
            }
        case GET_EMPLOYEE_DATA_FAILED:
            return {
                ...state,
            }
        default:
            return state
    }

}


