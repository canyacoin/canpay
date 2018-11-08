import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { PaymentItem, PaymentItemCurrency, PaymentSummary, Step } from '../interfaces';

@Component({
  selector: 'canyalib-payment-summary',
  templateUrl: './payment-summary.component.html',
  styleUrls: ['./payment-summary.component.scss']
})
export class PaymentSummaryComponent implements OnInit {
  @Output() error = new EventEmitter();
  @Output() stepChange = new EventEmitter();
  @Input() paymentSummary: PaymentSummary = null;
  @Input() amount = 0;

  constructor() { }

  ngOnInit() {
    if (!this.paymentSummary) {
      this.paymentSummary = {
        currency: PaymentItemCurrency.can,
        items: [{ name: 'Transfer', value: this.amount }],
        total: this.amount
      };
    }
  }

  get currencyIsUsd() {
    return this.paymentSummary.currency === PaymentItemCurrency.usd;
  }
  get currencyIsCan() {
    return this.paymentSummary.currency === PaymentItemCurrency.can;
  }

  get usdPerCan(): string {
    if (!this.amount || !this.paymentSummary.total) {
      return '?';
    }
    return (this.paymentSummary.total / this.amount).toPrecision(4).toString();
  }

  next() {
    this.stepChange.emit(Step.metamask);
  }

}
