import { ProductService } from './product.service';
import { Component } from '@angular/core';

/**
 * Products
 */
@Component({
    selector: 'products',
    templateUrl: './products.component.html',
    providers: [ProductService]
})
export class ProductComponent {
    products;

    /**
     * use dependency injection
     * @param productService
     */
    constructor(productService: ProductService) {
        this.products = productService.getProducts();
    }
}
