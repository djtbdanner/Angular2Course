import {Component} from 'angular2/core';
import {FormBuilder, ControlGroup, Validators} from 'angular2/common';
import {EmailValidator} from './emailValidator';
import {HTTP_PROVIDERS} from 'angular2/http';
import {CanDeactivate, Router } from 'angular2/router';
import {UsersHttpService } from './users.http.service';

@Component({
    templateUrl: '/app/users/adduser.component.html',
    styles: [".ng-touched.ng-invalid	{border:	1px	solid	red;}"],
    providers: [HTTP_PROVIDERS, UsersHttpService]
})
export class AddUserComponent implements CanDeactivate {

    form: ControlGroup;
    isSubmitting = false;

    constructor(fb: FormBuilder, private _userHttpService: UsersHttpService, private _router: Router) {
        this.form = fb.group({
            name: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
            email: ['', Validators.compose([Validators.required, EmailValidator.isInvalidEmailAddress])],
            phone: [],
            address: fb.group({
                street: [],
                suite: [],
                city: [],
                zipcode: []
            })
        });
    }

    routerCanDeactivate(next, previous) {

        if (this.form.dirty) {
            if (this.isSubmitting) {
                return;
            }
            return confirm("This form has been modified, are you sure you want to navigate away without saving changes?");
        }
    }

    submitForm() {
        this._userHttpService.saveUser(this.form.value).subscribe(x => {
            this.isSubmitting = true;
            this._router.navigate(['Users']);
        });
    }
}  