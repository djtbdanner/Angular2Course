System.register(['angular2/core', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, router_1, router_2;
    var BlogComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            }],
        execute: function() {
            BlogComponent = (function () {
                function BlogComponent(_routeParams) {
                    this._routeParams = _routeParams;
                    this.isLoading = true;
                }
                BlogComponent.prototype.ngOnInit = function () {
                    this.year = this._routeParams.get("year");
                    this.month = this._routeParams.get("month");
                    this.isLoading = false;
                };
                BlogComponent = __decorate([
                    core_1.Component({
                        template: "\n        <div *ngIf=\"isLoading\">\n            loading..\n        </div>\n        <div *ngIf=\"!isLoading\">\n            <h3><a [routerLink]=\"['Home']\">got it!</a></h3>\n            blog for {{year}}/{{month}}\n        </div>\n    \n    \n    ",
                        directives: [router_2.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams])
                ], BlogComponent);
                return BlogComponent;
            }());
            exports_1("BlogComponent", BlogComponent);
        }
    }
});
//# sourceMappingURL=blog.component.js.map