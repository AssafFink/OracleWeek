import { Component } from '@angular/core';

@Component({
    selector: 'app-desserts',
    templateUrl: './desserts.component.html',
    styleUrls: ['./desserts.component.css']
})
export class DessertsComponent {

    public styling = {
        color: Math.random() < 0.5 ? "green" : "red"
    };

    public desserts = [
        { id: 1, name: "Eclair" },
        { id: 2, name: "Pavlova" },
        { id: 3, name: "Amazing Cookie" },
    ];

    public isWeekend(): boolean {
        const now = new Date();
        const day = now.getDay();
        return day >= 6;
    }

}
