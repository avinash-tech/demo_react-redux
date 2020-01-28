import {combineReducers} from "redux"

import {loading} from "./Loder"
import{employee} from './Employee'

export default combineReducers({
    loading,
    employee
})

