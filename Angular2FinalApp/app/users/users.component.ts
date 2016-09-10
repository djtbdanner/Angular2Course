import {Component, OnInit} from 'angular2/core';
import {UsersHttpService} from './users.http.service';
import {HTTP_PROVIDERS} from 'angular2/http';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Observable} from 'rxjs/Rx';
import {AddUserComponent} from './adduser.component'

@Component({
    templateUrl: 'app/users/users.component.html',
    providers: [HTTP_PROVIDERS, UsersHttpService],
    directives: [ROUTER_DIRECTIVES]
})
export class UsersComponent implements OnInit {

    useras: any[];
    isLoading = true;

    constructor(private _userHttpService: UsersHttpService) { }

    ngOnInit() {
        this._userHttpService.getUsers().subscribe(users => {
            this.useras = users;
            this.isLoading = false;
        });
    }
}  