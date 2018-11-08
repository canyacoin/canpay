import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { CanYaCoinEthService } from '../services/canyacoin-eth.service';

@Component({
  selector: 'canyalib-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  @Output() error = new EventEmitter();
  @Output() success = new EventEmitter();
  @Input() dAppName;
  @Input() recipient;
  @Input() amount = 0;
  sendingTx = false;

  constructor(private canyaCoinEthService: CanYaCoinEthService) { }

  ngOnInit() { }

  pay() {
    if (this.sendingTx) { return; }

    this.sendingTx = true;
    this.canyaCoinEthService.payWithCAN(this.recipient, this.amount)
      .then(tx => tx.status === true ? this.success.emit(tx) : this.error.emit('Transaction failed'))
      .catch(err => this.error.emit(err.message))
      .then(() => this.sendingTx = false);

    return false;
  }
}
