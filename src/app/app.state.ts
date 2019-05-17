import { EmployeeModel } from './models/employee.model';

export interface AppState {
  readonly empData: EmployeeModel[];
}