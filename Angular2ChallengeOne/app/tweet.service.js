System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TweetService;
    return {
        setters:[],
        execute: function() {
            TweetService = (function () {
                function TweetService() {
                }
                TweetService.prototype.getTweets = function () {
                    return [
                        { imageUrl: "http://lorempixel.com/100/100/people/?1", imageAlt: "where is image", tweetHeading: 'Dave Danner', tweet: "I like cookies" },
                        { imageUrl: "http://lorempixel.com/100/100", imageAlt: "hello there missing image", tweetHeading: 'Tom Thumb', tweet: "I like cookies" },
                        { imageUrl: "http://lorempixel.com/100/100", imageAlt: "hello there missing image", tweetHeading: 'Tom Thumb', tweet: "I like cookies" },
                        { imageUrl: "http://lorempixel.com/100/100", imageAlt: "hello there missing image", tweetHeading: 'Tom Thumb', tweet: "I like cookies" },
                        { imageUrl: "http://lorempixel.com/100/100/people/?1", imageAlt: "looks like we made it", tweetHeading: 'James Kirk', tweet: "I like camaflage" }
                    ];
                };
                return TweetService;
            }());
            exports_1("TweetService", TweetService);
        }
    }
});
//# sourceMappingURL=tweet.service.js.map