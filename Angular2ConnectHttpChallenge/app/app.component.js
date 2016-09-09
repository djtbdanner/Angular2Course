System.register(['angular2/core', './http.service', 'angular2/http', 'rxjs/Rx'], function(exports_1, context_1) {
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
    var core_1, http_service_1, http_1, Rx_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_service_1_1) {
                http_service_1 = http_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                // injecting the service
                function AppComponent(_postService) {
                    this._postService = _postService;
                    this.isLoading = true;
                    this.username = "ternsip";
                }
                AppComponent.prototype.ngOnInit = function () {
                    // this._postService.getUsers().subscribe(posts  =>  {
                    //     this.posts = posts;
                    //     this.isLoading = false;
                    // });
                    // this._postService.getFollowers().subscribe(followers  =>  {
                    //     this.followers = followers;
                    //     this.isFollersLoaded = false;
                    // });
                    var _this = this;
                    Rx_1.Observable.forkJoin(this._postService.getUsers(this.username), this._postService.getFollowers(this.username)).subscribe(function (res) {
                        _this.posts = res[0];
                        _this.followers = res[1];
                    }, null, function () { _this.isLoading = false; });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <i\u00A0*ngIf=\"isLoading\" class=\"fa fa-spinner fa-spin fa-4x\"></i>\t\n\n \u00A0\n            <div *ngIf=\"!isLoading\">\n                <h1>  {{ posts.login }} </h1>\n                <br/>\n                <img class = 'avatar' src=\" {{ posts.avatar_url }}\" alt=\"{{posts.name}}\" />\n\n                <h2>Followers</h2>\n                <div *ngFor = \"#follower of followers\" class=\"media\" >\n                    <div class=\"media-left\">\n                        <a href=\"#\">\n                            <img class=\"avatar\" src=\"{{ follower.avatar_url }}\" alt=\"...\">\n                        </a>\n                    </div>\n                    <div class=\"media-body\">\n                        <h4 class=\"media-heading\">{{ follower.login }} </h4>\n                    </div>\n                </div>\n            </div>\n    ",
                        providers: [http_1.HTTP_PROVIDERS, http_service_1.PostService],
                        styles: [".avatar{width:100px;height:100px;border-radius: 100%;}"]
                    }), 
                    __metadata('design:paramtypes', [http_service_1.PostService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map