import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProductModel } from '../Models/product.model';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {

    constructor(private http: HttpClient) { }

    public getAllProducts(): Promise<ProductModel[]> {
        const myObservable = this.http.get<ProductModel[]>(environment.productsUrl);
        const myPromise = firstValueFrom(myObservable);
        return myPromise;
    }

    public addProduct(product: ProductModel) {
        const myFormData = new FormData();
        myFormData.append("name", product.name);
        myFormData.append("price", product.price.toString());
        myFormData.append("stock", product.stock.toString());
        myFormData.append("image", product.image);
        const myObservable = this.http.post<ProductModel>(environment.productsUrl, myFormData);
        const myPromise = firstValueFrom(myObservable);
        return myPromise;
    }

}
