import { SpotifyService } from './spotify.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-spotify',
  templateUrl: './spotify.component.html',
  styleUrls: ['./spotify.component.css'],
  providers: [SpotifyService]
})
export class SpotifyComponent implements OnInit {
  isLoading = true;

  constructor(private _spotifyService: SpotifyService) {

  }

  ngOnInit() {
    this._spotifyService
      .getSpotifyData()
      .subscribe(data => {
        console.log(data);
        this.isLoading = false;
      });

  }

}
