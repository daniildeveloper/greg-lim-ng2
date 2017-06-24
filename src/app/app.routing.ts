import { ProductComponent } from './products/products.component';
import { SpotifyComponent } from './spotify/spotify.component';
import { NotfoundComponent } from './notfound/notfound.component';

import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routing = RouterModule.forRoot([
    { path: '', component: ProductComponent },
    { path: 'spotify', component: SpotifyComponent },
    { path: '**', component: NotfoundComponent }
]);

export const routes: Routes = [
    { path: '', component: ProductComponent },
    { path: 'spotify', component: SpotifyComponent },
    { path: '**', component: NotfoundComponent }
];
