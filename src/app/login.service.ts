import { Injectable } from '@angular/core';

/**
 * login
 */
@Injectable()
export class LoginService {
    isLoggedIn = false;

    /**
     * login in to angualr app
     * @param username username to login
     * @param password usernames password
     */
    login(username, password) {
        if (username === 'daniil' && password === '123') {
            this.isLoggedIn = true;
        } else {
            this.isLoggedIn = false;
        }
        return this.isLoggedIn;
    }

    /**
     * logout from angular app
     */
    logout() {
        this.isLoggedIn = false;
        return this.isLoggedIn;
    }
}
