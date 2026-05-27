import { Component, inject, output, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'form-item',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-item.component.html',
})
export class FormItemComponent {
  addItemEventEmitter = output<any>();

  fb = inject(FormBuilder);

  counterId = signal(4);

  formItem = this.fb.group({
    product: ['', [Validators.required, Validators.minLength(5)]],
    price: [0, [Validators.required, Validators.minLength(10)]],
    quantity: [0, [Validators.required, Validators.minLength(1)]],
  });

  onSubmit(): void {
    this.formItem.markAllAsTouched();

    if (this.formItem.invalid) return;

    this.addItemEventEmitter.emit({ id: this.counterId(), ...this.formItem.value });

    this.formItem.reset();
    this.counterId.update((value) => value + 1);
  }
}
