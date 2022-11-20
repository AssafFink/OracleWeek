import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: 'app-location',
    templateUrl: './location.component.html',
    styleUrls: ['./location.component.css']
})
export class LocationComponent {

    @ViewChild("userLocation")
    public userLocationRef: ElementRef<HTMLSelectElement>;

    public show(location: string): void {
        alert("Location: " + location);
    }

    public display(): void {
        alert("Location: " + this.userLocationRef.nativeElement.value);
    }

}
