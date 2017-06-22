import { RatingComponent } from './rating/rating.component';
import { AdwertismentComponent } from './adwerisment/ads.component';
import { ProductComponent } from './products/products.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SingleProductComponent } from './singleproduct/singleproduct.component';

import { AppComponent } from './app.component';
import { UserFormComponent } from './user-form/user-form.component';
import { LoginFormComponent } from './login-form/login-form.component';

import {ReactiveFormsModule} from '@angular/forms';
import { ObservComponent } from './observ/observ.component';
import { SpotifyComponent } from './spotify/spotify.component';

/**
 * Entry point to application
 *
 * Module is plain Ts class with NgModule decorator
 */
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    AdwertismentComponent,
    RatingComponent,
    SingleProductComponent,
    UserFormComponent,
    LoginFormComponent,
    ObservComponent,
    SpotifyComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
