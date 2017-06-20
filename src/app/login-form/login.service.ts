import { Injectable } from '@angular/core';

/**
 * class to check auth for login
 */
@Injectable()
export class LoginService {

    /**
     * Simple demo how login work
     * @param username username to login
     * @param password password 
     */
    login(username, password) {
        if (username === 'daniil' && password === '123') {
            return true;
        } else {
            return false;
        }
    }
}