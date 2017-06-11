import { AdsService } from './ads.service';
import { Component } from '@angular/core';

/**
 * Products Component
 */
@Component({
    selector: 'app-ads',
    templateUrl: './ads.component.html',
    providers: [AdsService]
})
export class AdwertismentComponent {
    title = 'Adwerisments';
    ads;

    constructor(adsService: AdsService) {
        this.ads = adsService.getAds();
    }

}
