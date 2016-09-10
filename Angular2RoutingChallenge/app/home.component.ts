import {Component} from 'angular2/core';
import { ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    template: `

        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul *ngFor="#yearMonth of yearMonths" class="nav navbar-nav">
                <li><a [routerLink]="['Blog', {year:yearMonth.year, month:yearMonth.month}]">{{yearMonth.year}}/{{yearMonth.month}}</a></li>
            </ul>
       </div>
       <router-outlet></router-outlet>
   
    `,
    styles: ["a{cursor:pointer}"],
    directives: [ROUTER_DIRECTIVES]
})
export class HomeComponent {
    yearMonths = [{year:"2016", month:"1"}, {year:"2016", month:"2"}, {year:"2016", month:"3"}]
}

