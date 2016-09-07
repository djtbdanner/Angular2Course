import {Component} from 'angular2/core';


@Component({
    selector: 'my-app',
    templateUrl: 'app/app-form.component.html'
})
export class AppComponent { 

    log(s){
        console.log(s);
    }

    submitPage(theForm){
        console.log(theForm.value );
    }

}