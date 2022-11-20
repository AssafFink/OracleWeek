import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './components/layout-area/layout/layout.component';
import { HeaderComponent } from './components/layout-area/header/header.component';
import { MenuComponent } from './components/layout-area/menu/menu.component';
import { CopyrightsComponent } from './components/layout-area/copyrights/copyrights.component';
import { HomeComponent } from './components/home-area/home/home.component';
import { SearchComponent } from './components/home-area/search/search.component';
import { FormsModule } from '@angular/forms';
import { DiscountComponent } from './components/home-area/discount/discount.component';
import { DessertsComponent } from './components/home-area/desserts/desserts.component';
import { LocationComponent } from './components/home-area/location/location.component';
import { SaleComponent } from './components/home-area/sale/sale.component';
import { SurveyComponent } from './components/home-area/survey/survey.component';
import { ClockComponent } from './components/home-area/clock/clock.component';
import { AddressComponent } from './components/home-area/address/address.component';
import { ProductListComponent } from './components/products-area/product-list/product-list.component';
import { AboutComponent } from './components/about-area/about/about.component';
import { PageNotFoundComponent } from './components/layout-area/page-not-found/page-not-found.component';
import { HttpClientModule } from "@angular/common/http";
import { SpinnerComponent } from './components/shared-area/spinner/spinner.component';
import { ProductCardComponent } from './components/products-area/product-card/product-card.component';
import { AddProductComponent } from './components/products-area/add-product/add-product.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ContactUsComponent } from './components/contact-us-area/contact-us/contact-us.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";


@NgModule({
    declarations: [
        LayoutComponent,
        HeaderComponent,
        MenuComponent,
        CopyrightsComponent,
        HomeComponent,
        SearchComponent,
        DiscountComponent,
        DessertsComponent,
        LocationComponent,
        SaleComponent,
        SurveyComponent,
        ClockComponent,
        AddressComponent,
        ProductListComponent,
        AboutComponent,
        PageNotFoundComponent,
        SpinnerComponent,
        ProductCardComponent,
        AddProductComponent,
        ContactUsComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        MatSlideToggleModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule
    ],
    providers: [],
    bootstrap: [LayoutComponent]
})
export class AppModule { }
