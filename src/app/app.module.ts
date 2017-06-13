import { RatingComponent } from './rating/rating.component';
import { AdwertismentComponent } from './adwerisment/ads.component';
import { ProductComponent } from './products/products.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SingleProductComponent } from './singleproduct/singleproduct.component';

import { AppComponent } from './app.component';

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
    SingleProductComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
