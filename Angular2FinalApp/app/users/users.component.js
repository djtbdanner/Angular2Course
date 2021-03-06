System.register(['angular2/core', './users.http.service', 'angular2/http', 'angular2/router', '../navbar/spinner.component'], function(exports_1, context_1) {
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
    var core_1, users_http_service_1, http_1, router_1, spinner_component_1;
    var UsersComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (users_http_service_1_1) {
                users_http_service_1 = users_http_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (spinner_component_1_1) {
                spinner_component_1 = spinner_component_1_1;
            }],
        execute: function() {
            UsersComponent = (function () {
                function UsersComponent(_userHttpService) {
                    this._userHttpService = _userHttpService;
                    this.isLoading = true;
                }
                UsersComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._userHttpService.getUsers().subscribe(function (users) {
                        _this.users = users;
                        _this.isLoading = false;
                    });
                };
                UsersComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/users/users.component.html',
                        providers: [http_1.HTTP_PROVIDERS, users_http_service_1.UsersHttpService],
                        directives: [router_1.ROUTER_DIRECTIVES, spinner_component_1.SpinnerComponent]
                    }), 
                    __metadata('design:paramtypes', [users_http_service_1.UsersHttpService])
                ], UsersComponent);
                return UsersComponent;
            }());
            exports_1("UsersComponent", UsersComponent);
        }
    }
});
//# sourceMappingURL=users.component.js.map