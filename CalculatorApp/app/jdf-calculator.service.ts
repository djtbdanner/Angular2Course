
import { Injectable } from '@angular/core';
import { Payment, Loan } from './jdf-calculator.classes';


@Injectable()
export class JDFCalculatorService {

    calculate(loan: Loan) {
        let paymentAmount = loan.amount * (loan.interest/(1- Math.pow((1+loan.interest), -loan.payments)  )  );
        
        let payments = new Array;

        let totalLoanAmt = loan.amount;
        for (let i = 0; i < loan.payments; i++){
          

            let interest = (totalLoanAmt * loan.interest)/12
            let principal = paymentAmount - interest;

            let payment = new Payment;
            payment.interest = interest;
            payment.principal = principal;

            totalLoanAmt = totalLoanAmt - principal;
            payment.balance = totalLoanAmt;
            payment.paymentNumber = i+1;
            let date = new Date;
            payment.dueDate = date.toDateString();

            payments.push(payment);


        }

        return payments;

        // alert (loan.amount);
        // alert (loan.interest);
        // alert (loan.payments);
        // return  [
        //     { "paymentNumber": 1, "principal": 100, "interest": 10, "balance" : 500, "dueDate": "08/17/1963" },
        //     { "paymentNumber": 2, "principal": 100, "interest": 9, "balance" : 410, "dueDate": "08/17/1963" },
        //     { "paymentNumber": 3, "principal": 100, "interest": 8, "balance" : 319, "dueDate": "08/17/1963" },
        //     { "paymentNumber": 4, "principal": 100, "interest": 7, "balance" : 226, "dueDate": "08/17/1963" },
        //     { "paymentNumber": 5, "principal": 100, "interest": 6, "balance" : 132, "dueDate": "08/17/1963" },
        //     { "paymentNumber": 6, "principal": 100, "interest": 5, "balance" : 37, "dueDate": "08/17/1963" },
        //     { "paymentNumber": 7, "principal": 38, "interest": 1, "balance" : 0, "dueDate": "08/17/1963" }
        // ];
    }
}