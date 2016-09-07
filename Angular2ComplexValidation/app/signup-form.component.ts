import {Component} from 'angular2/core';
import {ControlGroup, Control, Validators, FormBuilder} from 'angular2/common';
import {UserNameValidators} from './userNameValidators';


@Component({
    selector: 'signup-form',
    templateUrl: 'app/signup-form.component.html',
    styleUrls: ['app/app-form.css']
})
export class SignUpFormComponent {
    // form = new ControlGroup({
    //     username: new Control('', Validators.required),
    //     password: new Control('', Validators.required)
    // });

    form: ControlGroup;

    constructor(fb: FormBuilder) {
        this.form = fb.group({
            username: ['', Validators.compose([Validators.required, UserNameValidators.cannotContainSpace]), UserNameValidators.shouldBeUnique],
            password['', Validators.required]
        })
    }

    signup() {
        this.form.find("username").setErrors({invalidLogin:true});
        console.log(this.form.value);
    }
} 