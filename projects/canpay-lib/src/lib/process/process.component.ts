import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'canyalib-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.scss']
})
export class ProcessComponent {
  @Output() success = new EventEmitter();
  @Output() start = new EventEmitter();
  @Input() processName;
  @Input() dAppName;
  @Input() recipient;
  @Input() amount = 0;
  @Input() set error(msg: string) {
    if (!!msg) {
      this.sendingTx = false;
    }
  }

  sendingTx = false;

  constructor() { }

  submit() {
    this.sendingTx = true;
    this.start.emit(true);
  }
}
