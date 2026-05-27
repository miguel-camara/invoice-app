import { Injectable, signal } from '@angular/core';
import { invoiceData } from '../data/invoice.data';
import { Invoice } from '../interfaces/invoice';
import { Item } from '../interfaces/item';

@Injectable({
  providedIn: 'root',
})
export class InvoiceService {
  #invoice = signal<Invoice>(invoiceData);

  getInvoice(): Invoice {
    const total = this.calculateTotal();

    console.log(this.#invoice().items);

    return { ...this.#invoice(), total };
  }

  remove(id: number): Invoice {
    this.#invoice().items = this.#invoice().items.filter((item) => item.id != id);
    const total = this.calculateTotal();
    return { ...this.#invoice(), total };
  }

  save(item: Item): Invoice {
    this.#invoice.set({ ...this.#invoice(), items: [...this.#invoice().items, item] });

    // this.#invoice().items = [...this.#invoice().items, item];
    const total = this.calculateTotal();
    return { ...this.#invoice(), total };
  }

  calculateTotal() {
    // let total = 0;
    // this.invoice.items.forEach(item => total += item.price * item.quantity);
    // return total;
    return this.#invoice().items.reduce((total, item) => total + item.price * item.quantity, 0);
  }
}
