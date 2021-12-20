import { Component, OnInit } from '@angular/core';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-enter-expenses',
  templateUrl: './enter-expenses.component.html',
  styleUrls: ['./enter-expenses.component.css']
})
export class EnterExpensesComponent implements OnInit {

  name:string;
  quantity:number;
  error:boolean;
  texterror:string;

  constructor(private _budgetservice:BudgetService) { 
    this.name='';
    this.quantity=0;
    this.error=false;
    this.texterror='Error: Expense or quantity incorrect!';
  }

  ngOnInit(): void {
  }

  addExpense(): void{

    if(this.quantity>this._budgetservice.residue){
      this.error=true;
      this.texterror='You are spending more than what you have!';
      return;
    }

    if(this.name=='' || this.quantity <=0){
      this.error=true;
    }else{
      this.error=false;
      this.texterror='Error: Expense or quantity incorrect!';

      // create object

      const EXPENSE = {
        name: this.name,
        quantity:this.quantity
      }

      // send object to susbribers
      this._budgetservice.addExpenseS(EXPENSE);

      // reset
      this.name='';
      this.quantity=0;
    }

  }

}
