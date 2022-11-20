import { Component } from '@angular/core';

@Component({
    selector: 'app-discount',
    templateUrl: './discount.component.html',
    styleUrls: ['./discount.component.css']
})
export class DiscountComponent {

    public currentDate = new Date();
    public minAmount = 100;

}
