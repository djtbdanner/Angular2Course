
import {Http} from 'angular2/http'
import {Injectable} from 'angular2/core'
import 'rxjs/add/operator/map';
import  'rxjs/add/observable/forkJoin';	
  

@Injectable()
export class PostService {
    // underscore is standard for private
    private _url = "https://api.github.com/users/octocat";
     private _followerUrl = "https://api.github.com/users/octocat/followers";
    constructor(private _http: Http) {
    }

    getUsers() {
         return this._http.get(this._url).map(res => res.json());
       
    }

    getFollowers() {
         return this._http.get(this._followerUrl).map(res => res.json());
       
    }


}