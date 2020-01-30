/**
 * @About
 * 
 */
import {
    IS_LOADING_START,
    IS_LOADING_STOP,
    GET_EMPLOYEE_DATA_SUCCESS,
    GET_EMPLOYEE_DATA_FAILED,
    ADD_EMPLOYEE_SUCCESS,
    ADD_EMPLOYEE_FAILED,
    EDIT_EMPOYEE_SUCCESS
} from '../../redux/action/Types'

import { _getEmployeeData , _addEmployee,_editEmployee} from '../../config/apiService/EmployeeService'


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

// action for aDD USER details
export const addEmployee = req => dispatch => {
    console.log("call get userr", req)
    dispatch({ type: IS_LOADING_START })
    _addEmployee(req)
        .then(resp => { 
            console.log("user===>>>>><<<<>>>>", resp);

            let payload = {
                empData: resp.data
            }
            dispatch({ type: ADD_EMPLOYEE_SUCCESS, payload })
            dispatch({ type: IS_LOADING_STOP })
            alert(resp.status)

        }).catch(err => {
            dispatch({ type: IS_LOADING_STOP })

        })
}

// action for aDD USER details
export const editEmployee = req => dispatch => {
    console.log("call get userr", req)
    dispatch({ type: IS_LOADING_START })
    _editEmployee(req)
        .then(resp => { 
            console.log("user===>>>>><<<<>>>>", resp.data);

            let payload = {
                empData: resp.data
            }
            dispatch({ type: EDIT_EMPOYEE_SUCCESS, payload })
            dispatch({ type: IS_LOADING_STOP })

        }).catch(err => {
            dispatch({ type: IS_LOADING_STOP })

        })
}


