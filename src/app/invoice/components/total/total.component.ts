import { Component, input } from '@angular/core';

@Component({
  selector: 'total',
  templateUrl: './total.component.html',
})
export class TotalComponent {
  total = input<number>(0);
}
