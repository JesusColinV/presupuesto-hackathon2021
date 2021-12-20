import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-enter-budget',
  templateUrl: './enter-budget.component.html',
  styleUrls: ['./enter-budget.component.css']
})
export class EnterBudgetComponent implements OnInit {

  quantity:number;
  quantityError:boolean;

  constructor(private _budgetservice: BudgetService, private router : Router) { 
    this.quantity=0;
    this.quantityError=false;
  }

  ngOnInit(): void {
  }

  reviewQuantity():void{
    if(this.quantity>0){
      this.quantityError=false;
      this._budgetservice.budget = this.quantity;
      this._budgetservice.residue = this.quantity;
      this.router.navigate(['/expenses'])
    }else{
      this.quantityError=true;
    }
    //console.log(this.quantity)
    //console.log(this.quantityError)
  }
}


