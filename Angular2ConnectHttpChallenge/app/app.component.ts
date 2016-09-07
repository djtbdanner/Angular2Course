import {Component} from 'angular2/core';
import {PostService} from './http.service';
import {HTTP_PROVIDERS} from 'angular2/http';
import {OnInit} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `<h1>My First Angular 2 App</h1>
        <div *ngIf="isLoading">
            asdf
        </div>
        <div *ngIf="!isLoading">
            {{posts | json}}
        </div>

        <br/>
    `, 
    providers: [HTTP_PROVIDERS, PostService]

})

export class AppComponent implements OnInit {

    posts: any[];
    isLoading = true;

    // injecting the service
    constructor(private _postService: PostService) {
    }

    ngOnInit() {
        // this._postService.getUsers().subscribe(posts  =>  {
        //     this.posts  = posts
        //     this.isLoading = false;
        // });
    }
}