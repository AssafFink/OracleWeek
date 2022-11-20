import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-survey',
    templateUrl: './survey.component.html',
    styleUrls: ['./survey.component.css']
})
export class SurveyComponent {

    @Input()
    public question: string;

    @Output()
    public surveyResult = new EventEmitter<string>();

    public report(result: string): void {
        this.surveyResult.emit(result);
    }

}
