import { Http } from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {
    spotify: String = 'https://api.spotify.com/v1/';
    /**
     * @param _http need to call data from endpoint
     */
    constructor(private _http: Http) {
    }

    /**
     * return data from api endpoint
     */
    getSpotifyData() {
        return this._http.get(this.spotify + 'search/?q=jason&type=artist')
            .map(res => res.json());
    }
}
