
import {Http} from 'angular2/http'
import {Injectable} from 'angular2/core'
import 'rxjs/add/operator/map';
import  'rxjs/add/observable/forkJoin';	
  

@Injectable()
export class PostService {
    // underscore is standard for private
    //private _url = "https://api.github.com/users/octocat";
    private _url = "https://api.github.com/users/";
     //private _followerUrl = "https://api.github.com/users/octocat/followers";
    constructor(private _http: Http) {
    }

    getUsers(username) {
         return this._http.get(this._url+username).map(res => res.json());
       
    }

    getFollowers(username) {
         return this._http.get(this._url+username+"/followers").map(res => res.json());
    }


}