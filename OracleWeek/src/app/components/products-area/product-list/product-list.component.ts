import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/Models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

    public allProducts: ProductModel[];
    public isDone = false;

    constructor(private myProductsService: ProductsService) { }

    async ngOnInit() {
        try {
            this.allProducts = await this.myProductsService.getAllProducts();
        }
        catch (err: any) {
            alert(err.message);
        }
        finally {
            this.isDone = true;
        }
    }

    // ngOnInit(): void {
    //     this.myProductsService.getAllProducts()
    //         .then(products => this.allProducts = products)
    //         .catch(err => alert(err.message));
    // }

}
