import { Invoice } from './../../interfaces/invoice';
import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { InvoiceService } from '../../services/invoice.service';
import { InvoiceViewComponent } from '../../components/invoice-view/invoice-view.component';
import { ClientViewComponent } from '../../components/client-view/client-view.component';
import { CompanyViewComponent } from '../../components/company-view/company-view.component';
import { ListItemsComponent } from '../../components/list-items/list-items.component';
import { TotalComponent } from '../../components/total/total.component';
import { FormItemComponent } from '../../components/form-item/form-item.component';
import { Item } from '../../interfaces/item';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [
    InvoiceViewComponent,
    ClientViewComponent,
    CompanyViewComponent,
    ListItemsComponent,
    TotalComponent,
    FormItemComponent,
  ],
  templateUrl: './invoice.component.html',
})
export class InvoiceComponent implements OnInit {
  invoice = signal<Invoice | null>(null);

  invoiceService = inject(InvoiceService);

  ngOnInit(): void {
    this.invoice.set(this.invoiceService.getInvoice());
    // console.log(this.invoiceService.getInvoice());
  }

  removeItem(id: number) {
    this.invoice.set(this.invoiceService.remove(id));
  }

  addItem(item: Item) {
    this.invoice.set(this.invoiceService.save(item));
  }
}
