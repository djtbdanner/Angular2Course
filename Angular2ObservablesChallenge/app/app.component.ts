import {Component} from 'angular2/core';
import {ControlGroup, FormBuilder} from 'angular2/common'
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';


@Component({
    selector: 'my-app',
    template: `
        <form	[ngFormModel]="form">
		   search <input	type="text"	ngControl="search">
        </form>	
        <div (click) = "clickMeDiv()" style = "cursor:pointer;color:red;"> click me </div>
        <div *ngIf = "startDatesSee">
            <br/>Here them start dates<br/>
            {{ startDatesSee | json }}  
        </div>
        `
})
export class AppComponent {

    form: ControlGroup;
    startDatesSee;
    constructor(fb: FormBuilder) {
        this.form = fb.group({
            search: []
        })

        var search = this.form.find('search');
        // include the imports above or this crap doesn't work. Looks like it will but wont
        search
            .valueChanges
            .debounceTime(400)
            .map(str => (<string>str).replace(/ /g, '-'))
            .subscribe(x => console.log(x));
        /// observable as a timer
        var observable = Observable.interval(10000);
        observable.subscribe(x => console.log(x));

        /// fork join example
        var userStream = Observable.of({
            userId: 1, username: 'mosh'
        }).delay(2000);
        var tweetsStream = Observable.of([1, 2, 3]).delay(1500);
        Observable
            .forkJoin(userStream, tweetsStream)
            .subscribe(result => console.log(result));


        /// how bout some kind of error?

        var observableError = Observable.throw(new Error("Something failed, this is an example though and not a real error so ignore it."));

        observableError.subscribe(
            x => console.log(x),
            error => console.error(error)
        )

        // catching an error and trying some thing different
        var remoteDataStream = Observable.throw(new Error("Something failed."));
        remoteDataStream.catch(err => {
            console.error("caught the error " + err);
            var localDataStream = Observable.of(["default", "stuff", "as opposed to error"]);
            return localDataStream;
        })
            .subscribe(x => console.log(x));

        console.log("trying timout");
        //
        var timeoutObserver = Observable.of([1, 2, 3]).delay(5000);
        timeoutObserver.timeout(1000).subscribe(
            x => console.log(x),
            errorf => console.error(errorf)
        );

    }

    clickMeDiv() {
        var startDates = [];
        var startDate = new Date();	//	Assuming	today	for	simplicity
        for (var day = -2; day <= 2; day++) {
            var date = new Date(
                startDate.getFullYear(),
                startDate.getMonth(),
                startDate.getDate() + day);

            startDates.push(startDate);
            this.startDatesSee = startDates;
        }

        Observable
            .fromArray(startDates)
            .map(date => { console.log("Getting	deals	for	date	" + date); return [1, 2, 3]; })
            .subscribe(x => console.log(x));

        Observable
            .fromArray([1, 2, 3])
            .subscribe(x => console.log(x));


        Observable.of([1, 2, 3, 4, 5])
            .subscribe(x => console.log(x));


        Observable
            .fromArray(['b', 'bo', 'boo', 'book'])
            .filter(x => x.length > 3)
            .subscribe(x => console.log(x));



        Observable
            .fromArray([1, 2, 3])
            .flatMap(x => Observable.of(['a', 'b', 'c']))
            .subscribe(x => console.log(x));


        Observable.forkJoin(
            Observable.of({ userName: "Mosh" }),
            Observable.of([1, 2, 3])
            ).subscribe(x => console.log(x[0]));

    }


}