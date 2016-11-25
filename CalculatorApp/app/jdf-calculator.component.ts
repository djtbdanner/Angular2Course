import { Component } from '@angular/core';
import { Payment, Loan } from './jdf-calculator.classes'
import { JDFCalculatorService } from './jdf-calculator.service';


@Component({
  selector: 'jdf-calculator',
  templateUrl: 'app/jdf-calculator-form.component.html'
})
export class JDFCalculator  {

  constructor (private _calculatorService: JDFCalculatorService){}

  payments: Payment[];
  loan: Loan;

  calculateLoan(){
    this.loan = new Loan();
    this.payments = this._calculatorService.calculate(this.loan);
  }
}
