import { Component, input } from '@angular/core';

@Component({
  selector: 'invoice-view',
  templateUrl: './invoice-view.component.html',
})
export class InvoiceViewComponent {
  name = input.required<string>();
  id = input.required<number>();
}
