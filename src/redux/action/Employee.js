/**
 * @About
 * 
 */
import {
    IS_LOADING_START,
    IS_LOADING_STOP,
    GET_EMPLOYEE_DATA_SUCCESS,
    GET_EMPLOYEE_DATA_FAILED
} from '../../redux/action/Types'

import { _getEmployeeData } from '../../config/apiService/EmployeeService'


// action for getUser details
export const getEmployeeData = req => dispatch => {
    console.log("call get userr", req)
    dispatch({ type: IS_LOADING_START })
    _getEmployeeData(req)
        .then(resp => { 
            console.log("user===>>>>><<<<>>>>", resp.data);

            let payload = {
                empData: resp.data
            }
            dispatch({ type: GET_EMPLOYEE_DATA_SUCCESS, payload })
            dispatch({ type: IS_LOADING_STOP })

        }).catch(err => {
            dispatch({ type: IS_LOADING_STOP })

        })
}


