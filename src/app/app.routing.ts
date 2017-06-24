import { ProductComponent } from './products/products.component';
import { SpotifyComponent } from './spotify/spotify.component';
import { UserFormComponent } from './user-form/user-form.component';
import { NotfoundComponent } from './notfound/notfound.component';

import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routesList: Array<Object> = [
    { path: '', component: ProductComponent },
    { path: 'spotify', component: SpotifyComponent },
    { path: 'signup', component: UserFormComponent },
    { path: '**', component: NotfoundComponent }
];
export const routing = RouterModule.forRoot(routesList);

export const routes: Routes = routesList;
