import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ProductModel } from 'src/app/Models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
    selector: 'app-add-product',
    templateUrl: './add-product.component.html',
    styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

    @ViewChild("myImage")
    public myImage: ElementRef<HTMLInputElement>;

    public product = new ProductModel();

    constructor(private myProductsService: ProductsService, private router: Router) { }

    public async send() {
        try {
            this.product.image = this.myImage.nativeElement.files[0];
            await this.myProductsService.addProduct(this.product);
            alert("Product added.");
            this.router.navigateByUrl("/products");
        }
        catch (err: any) {
            console.log(err);
            alert(err.message);
        }
    }


}
