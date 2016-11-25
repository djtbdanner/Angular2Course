import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { JDFCalculator }  from './jdf-calculator.component';
import { JDFCalculatorService } from './jdf-calculator.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ JDFCalculator ],
  providers:    [ JDFCalculatorService ],
  bootstrap:    [ JDFCalculator ]
})
export class JDFCalculatorModule { }
