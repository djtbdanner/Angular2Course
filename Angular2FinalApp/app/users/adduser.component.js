System.register(['angular2/core', 'angular2/common', './emailValidator', 'angular2/http', 'angular2/router', './users.http.service'], function(exports_1, context_1) {
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
    var core_1, common_1, emailValidator_1, http_1, router_1, users_http_service_1;
    var AddUserComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (emailValidator_1_1) {
                emailValidator_1 = emailValidator_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (users_http_service_1_1) {
                users_http_service_1 = users_http_service_1_1;
            }],
        execute: function() {
            AddUserComponent = (function () {
                function AddUserComponent(fb, _userHttpService, _router) {
                    this._userHttpService = _userHttpService;
                    this._router = _router;
                    this.isSubmitting = false;
                    this.form = fb.group({
                        name: ['', common_1.Validators.compose([common_1.Validators.required, common_1.Validators.minLength(4)])],
                        email: ['', common_1.Validators.compose([common_1.Validators.required, emailValidator_1.EmailValidator.isInvalidEmailAddress])],
                        phone: [],
                        address: fb.group({
                            street: [],
                            suite: [],
                            city: [],
                            zipcode: []
                        })
                    });
                }
                AddUserComponent.prototype.routerCanDeactivate = function (next, previous) {
                    if (this.form.dirty) {
                        if (this.isSubmitting) {
                            return;
                        }
                        return confirm("This form has been modified, are you sure you want to navigate away without saving changes?");
                    }
                };
                AddUserComponent.prototype.submitForm = function () {
                    var _this = this;
                    this._userHttpService.saveUser(this.form.value).subscribe(function (x) {
                        _this.isSubmitting = true;
                        _this._router.navigate(['Users']);
                    });
                };
                AddUserComponent = __decorate([
                    core_1.Component({
                        templateUrl: '/app/users/adduser.component.html',
                        styles: [".ng-touched.ng-invalid	{border:	1px	solid	red;}"],
                        providers: [http_1.HTTP_PROVIDERS, users_http_service_1.UsersHttpService]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, users_http_service_1.UsersHttpService, router_1.Router])
                ], AddUserComponent);
                return AddUserComponent;
            }());
            exports_1("AddUserComponent", AddUserComponent);
        }
    }
});
//# sourceMappingURL=adduser.component.js.map