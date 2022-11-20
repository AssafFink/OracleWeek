import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
    selector: 'app-clock',
    templateUrl: './clock.component.html',
    styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit, OnDestroy {

    public time: string;
    public timerId: number;

    ngOnInit(): void {
        this.time = this.getTime();
        this.timerId = window.setInterval(() => this.time = this.getTime(), 1000);
    }

    private getTime(): string {
        const now = new Date();
        return now.toLocaleTimeString();
    }

    ngOnDestroy(): void {
        window.clearInterval(this.timerId);
    }

}
