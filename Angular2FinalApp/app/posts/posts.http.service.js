System.register(['angular2/http', 'angular2/core', 'rxjs/add/operator/map'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var http_1, core_1;
    var PostsHttpService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {}],
        execute: function() {
            PostsHttpService = (function () {
                function PostsHttpService(_http) {
                    this._http = _http;
                    this._url = "http://jsonplaceholder.typicode.com/posts";
                }
                PostsHttpService.prototype.getPosts = function (filter) {
                    if (filter && filter.userId) {
                        return this._http.get(this._url + "?userId=" + filter.userId).map(function (res) { return res.json(); });
                    }
                    return this._http.get(this._url).map(function (res) { return res.json(); });
                };
                PostsHttpService.prototype.getPostComments = function (postId) {
                    return this._http.get(this._url + "/" + postId + "/comments").map(function (res) { return res.json(); });
                };
                PostsHttpService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], PostsHttpService);
                return PostsHttpService;
            }());
            exports_1("PostsHttpService", PostsHttpService);
        }
    }
});
//# sourceMappingURL=posts.http.service.js.map