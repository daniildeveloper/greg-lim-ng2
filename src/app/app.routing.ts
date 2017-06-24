import { AuthGuard } from './auth-guard.service';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductComponent } from './products/products.component';
import { SpotifyComponent } from './spotify/spotify.component';
import { UserFormComponent } from './user-form/user-form.component';

import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routesList: Array<Object> = [
    { path: '', component: ProductComponent },
    { path: 'spotify', component: SpotifyComponent },
    { path: 'signup', component: UserFormComponent, canActivate: [AuthGuard] },    // we add param authguard to the route.
    { path: '**', component: NotfoundComponent }
];
export const routing = RouterModule.forRoot(routesList);

export const routes: Routes = routesList;
