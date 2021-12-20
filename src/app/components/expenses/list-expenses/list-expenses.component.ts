import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-list-expenses',
  templateUrl: './list-expenses.component.html',
  styleUrls: ['./list-expenses.component.css']
})
export class ListExpensesComponent implements OnInit , OnDestroy{
  suscription: Subscription;
  budget:number;
  residue:number;
  listExpenses: any[]=[];


  constructor(private _budgetservice: BudgetService) {
    this.budget=0;
    this.residue=0;
    this.suscription = this._budgetservice.getExpenseS().subscribe(data =>{
      this.residue = this.residue - data.quantity;
      this.listExpenses.push(data);
    })
   }

  ngOnInit(): void {
    this.budget=this._budgetservice.budget
    this.residue=this._budgetservice.residue
  }

  ngOnDestroy():void {
    this.suscription.unsubscribe()
  }

  applycolor(){

    if(this.budget/4 > this.residue){
      return 'alert alert-danger';
    } else if (this.budget/2 > this.residue){
      return 'alert alert-warning';
    } else {
      return 'alert alert-secondary';
    }

  }

}
