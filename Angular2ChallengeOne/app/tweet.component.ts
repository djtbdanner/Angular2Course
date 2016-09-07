import {Component} from 'angular2/core';
import {TweetService} from './tweet.service';

@Component({
    selector: 'tweet',
    template: `
    <div *ngFor="#tweet of tweets">
        <div   class="media">
            <div class="media-left">
            <a href="#">
                <img class="media-object" src="{{tweet.imageUrl}}" alt="Is someone there?">
            </a>
        </div>
        <div class="media-body">
            <h4 class="media-heading">{{tweet.tweetHeading}}</h4>
               {{tweet.tweet}}
        </div>
    </div>

     ` ,
     providers: [TweetService]

})


export class TweetComponent {
    tweets;
    constructor (tweetService: TweetService){
        this.tweets = tweetService.getTweets();
    }
 }