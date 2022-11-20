import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    public displayResult(result: string): void {
        alert("Survey Result: " + result);
    }

    constructor(private myTitle: Title) { }

    ngOnInit(): void {
        this.myTitle.setTitle("Products Home Page");
    }

}
