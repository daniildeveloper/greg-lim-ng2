import { Component } from '@angular/core';

/**
 * Componet to make rating
 */
@Component({
    selector: 'app-rating',
    templateUrl: './rating.component.html'
})
export class RatingComponent {
    /**
     * base rating value
     */
    rating = 0;

    /**
     * rating value
     * @param ratingValue rating value must be
     */
    onClick(ratingValue) {
        this.rating = ratingValue;
    }
}
