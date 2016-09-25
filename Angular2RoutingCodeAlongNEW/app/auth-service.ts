import {Injectable} from '@angular/core'

@Injectable()
export class AuthService {
    isLoggedIn = false;

    login(username, password) {
        // call a remote service, but skip that for now
        this.isLoggedIn = true;
        alert("just logged in " + username);
    }

    logout() {
        this.isLoggedIn = false;
    }

}