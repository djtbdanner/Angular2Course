import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import { ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    template: `
        <div *ngIf="isLoading">
            loading..
        </div>
        <div *ngIf="!isLoading">
            <h3><a [routerLink]="['Home']">got it!</a></h3>
            blog for {{year}}/{{month}}
        </div>
    
    
    `,
    directives:[ROUTER_DIRECTIVES]
})
export class BlogComponent implements OnInit {
    isLoading = true;
    year;
    month;
    constructor(private _routeParams: RouteParams){}

    ngOnInit() {
        this.year = this._routeParams.get("year");
        this.month = this._routeParams.get("month");
        this.isLoading = false;
    }

}