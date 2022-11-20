import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-sale',
    templateUrl: './sale.component.html',
    styleUrls: ['./sale.component.css']
})
export class SaleComponent {

    @Input()
    public percent: number;

    @Input()
    public category: string;

}
