
import {Tweet} from './tweet.object'

export class TweetService {

    getTweets(): Tweet[] {

        return [

            { imageUrl: "http://lorempixel.com/100/100/people/?1", imageAlt: "where is image", tweetHeading: 'Dave Danner', tweet: "I like cookies" },
            { imageUrl: "http://lorempixel.com/100/100", imageAlt: "hello there missing image", tweetHeading: 'Tom Thumb', tweet: "I like cookies" },
            { imageUrl: "http://lorempixel.com/100/100", imageAlt: "hello there missing image", tweetHeading: 'Tom Thumb', tweet: "I like cookies" },
            { imageUrl: "http://lorempixel.com/100/100", imageAlt: "hello there missing image", tweetHeading: 'Tom Thumb', tweet: "I like cookies" },
            { imageUrl: "http://lorempixel.com/100/100/people/?1", imageAlt: "looks like we made it",tweetHeading: 'James Kirk', tweet: "I like camaflage" }

        ];

    }
}

