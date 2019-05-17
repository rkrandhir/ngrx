import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './../app.state';
import { EmployeeModel } from '../models/employee.model'
import * as EmployeeActions from '../actions/employee.actions';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private store: Store<AppState>) {}

  addEmpData(name, empId, project) {
    this.store.dispatch(new EmployeeActions.AddEmployee({name, empId, project}) )
  }

  ngOnInit() {
  }

}
