import { Component, input } from '@angular/core';
import { Client } from '../../interfaces/client';

@Component({
  selector: 'client-view',
  templateUrl: './client-view.component.html',
})
export class ClientViewComponent {
  client = input.required<Client>();

  // @Input() client: Client = new Client();
}
