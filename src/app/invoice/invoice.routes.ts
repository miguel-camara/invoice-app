import { Routes } from '@angular/router';
import { InvoiceLayout } from './layouts/invoice-layout/invoice-layout';
import { InvoiceComponent } from './pages/invoice/invoice.component';

export const routes: Routes = [
  {
    path: '',
    component: InvoiceLayout,
    children: [
      {
        path: 'invoice',
        title: 'Invoice',
        component: InvoiceComponent,
      },
      {
        path: '**',
        redirectTo: 'invoice',
      },
    ],
  },
];

export default routes;
