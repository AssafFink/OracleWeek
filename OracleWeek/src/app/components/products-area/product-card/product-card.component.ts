import { Component, Input, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/Models/product.model';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-product-card',
    templateUrl: './product-card.component.html',
    styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

    @Input()
    public product: ProductModel;

    public imageUrl: string;

    ngOnInit(): void {
        this.imageUrl = environment.productImagesUrl + this.product.imageName;
    }

}
