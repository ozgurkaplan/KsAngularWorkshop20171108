import { Component, OnInit, Input, EventEmitter, Output, OnChanges } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {

  @Input() rating: number;
  @Input() isRateable = false;
  @Output() ratingClicked: EventEmitter<number> = new EventEmitter<number>();
  starWidth: Number;
  constructor() { }

  ngOnChanges(): void {
    this.starWidth = this.rating * 86 / 5 + 1;
  }

  rate(rating: number): void {
    if (this.isRateable) {
      this.ratingClicked.emit(rating);
    }
  }

  mouseEnter(): void {
    if (this.isRateable) {
      this.starWidth = 86;
    }
  }

  mouseLeave(): void {
    if (this.isRateable) {
      this.starWidth = this.rating * 86 / 5 + 1;
    }
  }
}
