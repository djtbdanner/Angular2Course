import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router'

@Injectable()
export class AuthService {

    isLoggedIn = false;

    login(username,password){
        // should call a remote service
        this.isLoggedIn = true;
    }

    logout(){
        this.isLoggedIn = false;
    }
}