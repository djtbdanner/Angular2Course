
import {Http} from 'angular2/http'
import {Injectable} from 'angular2/core'
import 'rxjs/add/operator/map';


@Injectable()
export class UsersHttpService {
    private _url = "https://jsonplaceholder.typicode.com/users";

    constructor(private _http: Http) {
    }

    getUsers() {
        return this._http.get(this._url).map(res => res.json());
    }

    saveUser(user) {
        // alert("saving "  + JSON.stringify(user));
        return this._http.post(this._url, JSON.stringify(user)).map(res => res.json());
    }
}
