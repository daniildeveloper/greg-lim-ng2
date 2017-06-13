import { Component, Input } from '@angular/core';

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
    @Input() rating = 0;

    /**
     * number of unique reviews for this product rating
     */
    @Input() numOfReviews = 0;
    /**
     * rating value
     * @param ratingValue rating value must be
     */
    onClick(ratingValue) {
        this.rating = ratingValue;
    }
}
