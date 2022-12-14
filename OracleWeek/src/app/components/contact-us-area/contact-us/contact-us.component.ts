import { Component } from '@angular/core';
import { ContactUsModel } from 'src/app/Models/contact-us.model';

@Component({
    selector: 'app-contact-us',
    templateUrl: './contact-us.component.html',
    styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {

    public contactUs = new ContactUsModel();

    public send(): void {
        alert("Sending...")
    }

}
