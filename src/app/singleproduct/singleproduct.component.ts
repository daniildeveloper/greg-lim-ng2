import { Component, Input } from '@angular/core';

/**
 * single product component
 */
@Component({
    selector: 'app-singleproduct',
    templateUrl: './singleproduct.component.html',
    styleUrls: ['./singleproduct.css'],
})
export class SingleProductComponent {
    /**
     * base data
     */
    @Input() data;
}
