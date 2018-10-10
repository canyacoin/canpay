import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormData } from '../../canexchange/data/formData.model';
import { FormDataService } from '../canpay-data/formData.service';
import { Personal } from '../canpay-data/formData.model';

@Component({
  selector: 'canyalib-input-amount',
  templateUrl: './input-amount.component.html',
  styleUrls: ['./input-amount.component.scss']
})
export class InputAmountComponent {
  @Output() amountUpdate = new EventEmitter();
  @Output() error = new EventEmitter();
  @Input() minAmount = 1;
  @Input() maxAmount = 0;
  @Input() formData: FormData;
  amount: number;
  personal: Personal;

  constructor(private formDataService: FormDataService) {
    this.formData = this.formDataService.getFormData();
    this.personal = this.formDataService.getPersonal();
  }

  onAmountKeyUp(event) {
    this.amount = Number(event.target.value);
    localStorage.setItem('oldamount', String(this.amount));
  }

  setAmount() {
    const amount = Number(this.amount);
    if (isNaN(amount) || amount < this.minAmount || (this.maxAmount && amount > this.maxAmount)) {
      const minAmountMsg = this.minAmount ? ', min allowed amount is ' + this.minAmount + ' CAN' : '';
      const maxAmountMsg = this.maxAmount ? ', max allowed amount is ' + this.maxAmount + ' CAN.' : '.';
      this.error.emit('Invalid payment amount' + minAmountMsg);
      return;
    }

    this.error.emit();
    this.amountUpdate.emit(amount);
  }
}
