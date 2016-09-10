import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import{BlogComponent} from './blog.component';
import{HomeComponent} from './home.component';

@RouteConfig([
     {path: '/home', name: 'Home', component: HomeComponent, useAsDefault: true },
     {path: '/blog/:year/:month', name: 'Blog', component: BlogComponent}
])

@Component({
    selector: 'my-app',
    template: `
       <h1>My App</h1>

       <router-outlet></router-outlet>

    `,
    directives: [ROUTER_DIRECTIVES],
    styles:["a{cursor:pointer}"]
})
export class AppComponent { }