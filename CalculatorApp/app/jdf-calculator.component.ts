import { Component } from '@angular/core';
import { Payment, Loan } from './jdf-calculator.classes'
import { JDFCalculatorService } from './jdf-calculator.service';


@Component({
  selector: 'jdf-calculator',
  templateUrl: 'app/jdf-calculator-form.component.html'
})
export class JDFCalculator  {

  constructor (private _calculatorService: JDFCalculatorService){
    this.loan = new Loan;
  }

  payments: Payment[];
  loan:Loan;
 // loanAmount;
  

  calculateLoan(){
    if (this.loan.amount > 0 && this.loan.interest > 0 && this.loan.payments > 0){
      this.payments = this._calculatorService.calculate(this.loan);
    }
  }

  changeLoanAmount(value:number){
    this.loan.amount = value;
    this.calculateLoan();
  }
  changeLoanInterest(value:number){    
    this.loan.interest = value;
    this.calculateLoan();
  }
  changeLoanPayment(value:number){   
    this.loan.payments = value;
    this.calculateLoan();
  }

}
