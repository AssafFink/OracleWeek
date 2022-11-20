import { Component } from '@angular/core';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent {

    public tooltip = Math.random() < 0.5 ? "Search entire website" : "Searching the web";

    public textToSearch: string = "";

    public searchMe(args: Event): void {
        console.log(args);
        alert("Searching for " + this.textToSearch);
        this.textToSearch = "";
    }

}
