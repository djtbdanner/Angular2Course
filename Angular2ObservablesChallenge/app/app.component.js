System.register(['angular2/core', 'angular2/common', 'rxjs/add/operator/debounceTime', 'rxjs/add/operator/map', 'rxjs/Rx'], function(exports_1, context_1) {
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
    var core_1, common_1, Rx_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(fb) {
                    this.form = fb.group({
                        search: []
                    });
                    var search = this.form.find('search');
                    // include the imports above or this crap doesn't work. Looks like it will but wont
                    search
                        .valueChanges
                        .debounceTime(400)
                        .map(function (str) { return str.replace(/ /g, '-'); })
                        .subscribe(function (x) { return console.log(x); });
                    /// observable as a timer
                    var observable = Rx_1.Observable.interval(10000);
                    observable.subscribe(function (x) { return console.log(x); });
                    /// fork join example
                    var userStream = Rx_1.Observable.of({
                        userId: 1, username: 'mosh'
                    }).delay(2000);
                    var tweetsStream = Rx_1.Observable.of([1, 2, 3]).delay(1500);
                    Rx_1.Observable
                        .forkJoin(userStream, tweetsStream)
                        .subscribe(function (result) { return console.log(result); });
                    /// how bout some kind of error?
                    var observableError = Rx_1.Observable.throw(new Error("Something failed, this is an example though and not a real error so ignore it."));
                    observableError.subscribe(function (x) { return console.log(x); }, function (error) { return console.error(error); });
                    // catching an error and trying some thing different
                    var remoteDataStream = Rx_1.Observable.throw(new Error("Something failed."));
                    remoteDataStream.catch(function (err) {
                        console.error("caught the error " + err);
                        var localDataStream = Rx_1.Observable.of(["default", "stuff", "as opposed to error"]);
                        return localDataStream;
                    })
                        .subscribe(function (x) { return console.log(x); });
                    console.log("trying timout");
                    //
                    var timeoutObserver = Rx_1.Observable.of([1, 2, 3]).delay(5000);
                    timeoutObserver.timeout(1000).subscribe(function (x) { return console.log(x); }, function (errorf) { return console.error(errorf); });
                }
                AppComponent.prototype.clickMeDiv = function () {
                    var startDates = [];
                    var startDate = new Date(); //	Assuming	today	for	simplicity
                    for (var day = -2; day <= 2; day++) {
                        var date = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() + day);
                        startDates.push(startDate);
                        this.startDatesSee = startDates;
                    }
                    Rx_1.Observable
                        .fromArray(startDates)
                        .map(function (date) { console.log("Getting	deals	for	date	" + date); return [1, 2, 3]; })
                        .subscribe(function (x) { return console.log(x); });
                    Rx_1.Observable
                        .fromArray([1, 2, 3])
                        .subscribe(function (x) { return console.log(x); });
                    Rx_1.Observable.of([1, 2, 3, 4, 5])
                        .subscribe(function (x) { return console.log(x); });
                    Rx_1.Observable
                        .fromArray(['b', 'bo', 'boo', 'book'])
                        .filter(function (x) { return x.length > 3; })
                        .subscribe(function (x) { return console.log(x); });
                    Rx_1.Observable
                        .fromArray([1, 2, 3])
                        .flatMap(function (x) { return Rx_1.Observable.of(['a', 'b', 'c']); })
                        .subscribe(function (x) { return console.log(x); });
                    Rx_1.Observable.forkJoin(Rx_1.Observable.of({ userName: "Mosh" }), Rx_1.Observable.of([1, 2, 3])).subscribe(function (x) { return console.log(x[0]); });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <form\t[ngFormModel]=\"form\">\n\t\t   search <input\ttype=\"text\"\tngControl=\"search\">\n        </form>\t\n        <div (click) = \"clickMeDiv()\" style = \"cursor:pointer;color:red;\"> click me </div>\n        <div *ngIf = \"startDatesSee\">\n            <br/>Here them start dates<br/>\n            {{ startDatesSee | json }}  \n        </div>\n        "
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map