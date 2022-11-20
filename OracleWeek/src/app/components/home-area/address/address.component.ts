import { Component, OnInit } from '@angular/core';
import { ColorsService } from 'src/app/services/colors.service';

@Component({
    selector: 'app-address',
    templateUrl: './address.component.html',
    styleUrls: ['./address.component.css'],
    // providers: [ColorsService]
})
export class AddressComponent implements OnInit {

    public styling = { color: "" }

    // DI - Dependency Injection
    constructor(private myColorsService: ColorsService) { }

    ngOnInit(): void {
        this.styling.color = this.myColorsService.getRandomColor();
    }

}
