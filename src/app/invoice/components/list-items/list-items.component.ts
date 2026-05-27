import { Component, input, output } from '@angular/core';
import { Item } from '../../interfaces/item';

@Component({
  selector: 'list-items',
  templateUrl: './list-items.component.html',
})
export class ListItemsComponent {
  items = input.required<Item[]>();

  removeEventEmitter = output<number>();

  onRemove(id: number) {
    this.removeEventEmitter.emit(id);
  }
}
