import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

 import {HomeComponent} from './home/home.component';
 import {UsersComponent} from './users/users.component';
 import {PostsComponent} from './posts/posts.component';
 import {NavbarComponent} from './navbar/navbar.component';
 import {AddUserComponent} from './users/adduser.component';

@RouteConfig([
    { path: '/home', name: 'Home', component: HomeComponent, useAsDefault: true },
    { path: '/users', name: 'Users', component: UsersComponent },
    { path: '/posts', name: 'Posts', component: PostsComponent },
    { path: '/users/new', name: 'UsersNew', component:  AddUserComponent},
    { path: '/*other', name: 'Other', redirectTo: ['Home'] }
])

@Component({
    selector: 'my-app',
    template:`
       <navbar></navbar>
        <div class="container">
            <router-outlet></router-outlet>
        </div>
    `,
    directives: [ROUTER_DIRECTIVES, NavbarComponent]
})
export class AppComponent { }   