// Section 1
import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { EmployeeModel } from '../models/employee.model'

// Section 2
export const ADD_EMPLOYEE       = '[EMPLOYEE] Add'
export const REMOVE_EMPLOYEE    = '[EMPLOYEE] Remove'

// Section 3
export class AddEmployee implements Action {
    readonly type = ADD_EMPLOYEE

    constructor(public payload: EmployeeModel) {}
}

export class RemoveEmployee implements Action {
    readonly type = REMOVE_EMPLOYEE

    constructor(public payload: number) {}
}

// Section 4
export type Actions = AddEmployee | RemoveEmployee