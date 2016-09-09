import {Component} from 'angular2/core';
import {PostService} from './http.service';
import {HTTP_PROVIDERS} from 'angular2/http';
import {OnInit} from 'angular2/core';
import {Observable} from 'rxjs/Rx';

@Component({
    selector: 'my-app',
    template: `
        <i *ngIf="isLoading" class="fa fa-spinner fa-spin fa-4x"></i>	

  
            <div *ngIf="!isLoading">
                <h1>  {{ posts.login }} </h1>
                <br/>
                <img class = 'avatar' src=" {{ posts.avatar_url }}" alt="{{posts.name}}" />

                <h2>Followers</h2>
                <div *ngIf="!isFollersLoaded">
                    <div *ngFor = "#follower of followers" class="media" >
                        <div class="media-left">
                            <a href="#">
                                <img class="avatar" src="{{ follower.avatar_url }}" alt="...">
                            </a>
                        </div>
                        <div class="media-body">
                            <h4 class="media-heading">{{ follower.login }} </h4>
                        </div>
                    </div>
                </div>
            </div>
        <br/> 
    `, 
    providers: [HTTP_PROVIDERS, PostService],
    styles :[".avatar{width:100px;height:100px;border-radius: 100%;}"]

})

export class AppComponent implements OnInit {

    posts: any[];
    followers: any[];
    isLoading = true;
    isFollersLoaded = true;

    // injecting the service
    constructor(private _postService: PostService) {
    }

    ngOnInit() {
        this._postService.getUsers().subscribe(posts  =>  {
            this.posts = posts;
            this.isLoading = false;
        });
        this._postService.getFollowers().subscribe(followers  =>  {
            this.followers = followers;
            this.isFollersLoaded = false;
        });

        // Observable.forkJoin(
        //     Observable.of({ 
        //         this._postService.getUsers().subscribe()
        //     }),
        //     Observable.of({ 
        //         userName: "Mosh" 
        //     })
        // ).subscribe(x => console.log(x[0]));
    }
}

