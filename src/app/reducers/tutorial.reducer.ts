import { Action } from '@ngrx/store'
import { EmployeeModel } from '../models/employee.model'
import * as EmployeeActions from '../actions/employee.actions'

// Section 1
const initialState: EmployeeModel = {
    name: 'Randhir',
    empId: 40215751,
    project: 'PrimeHome'
}

// Section 2
export function reducer(state: EmployeeModel[] = [initialState], action: EmployeeActions.Actions) {

    // Section 3
    switch(action.type) {
        case EmployeeActions.ADD_EMPLOYEE:
            return [...state, action.payload];
        // Add this case:
        case EmployeeActions.REMOVE_EMPLOYEE:
            state.splice(action.payload, 1)
            return state;
        default:
            return state;
    }
}