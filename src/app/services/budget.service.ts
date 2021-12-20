import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  budget:number;
  residue:number;

  private expenses$= new Subject<any>();

  constructor() { 
    this.budget=0;
    this.residue=0;
  }

  addExpenseS(expense:any){
    this.residue = this.residue - expense.quantity,
    this.expenses$.next(expense)
  }

  getExpenseS():Observable<any>{
    return this.expenses$.asObservable();
  }
}
