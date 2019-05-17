import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { EmployeeModel } from '../models/employee.model';
import { AppState } from './../app.state';
import * as EmployeeActions from '../actions/employee.actions';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  employees: Observable<EmployeeModel[]>;

  constructor(private store: Store<AppState>) { 
    this.employees = store.select('empData');
  }
  
  delEmpData(index) {
    this.store.dispatch(new EmployeeActions.RemoveEmployee(index) )
  }

  ngOnInit() {
  }

}
