import { Component, input } from '@angular/core';
import { Company } from '../../interfaces/company';

@Component({
  selector: 'company-view',
  templateUrl: './company-view.component.html',
})
export class CompanyViewComponent {
  company = input<Company>({ name: 'Empresa falsa', fiscalNumber: 10000 });
}
