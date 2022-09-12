import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

@Component({
    selector: 'pm-start',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges{
    @Input() rating: number = 4;
    cropWidth: number = 75;

    ngOnChanges(): void {
        this.cropWidth = this.rating * 75 / 5;
    }
}