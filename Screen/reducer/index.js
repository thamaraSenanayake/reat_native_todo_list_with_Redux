import {combineReducers} from "redux"
import todos from './todo'
import visiblilityFilter from "./visiblilityFilter"

export default combineReducers ({
    todos,
    visiblilityFilter,
});