import { Component } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent {
  current: number = 1;
  images: number[] = [1, 2, 3, 4, 5, 6];
  total: number = this.images.length;

  changeImage(page: number | string): void {
    if (page === 'prev' && this.current > 1) {
      this.current--;
    } else if (page === 'next' && this.current < this.total) {
      this.current++;
    } else if (typeof page === 'number') {
      this.current = page;
    }
  }
}
