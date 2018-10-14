import { Component, OnInit, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { FormData } from '../canpay-data/formData.model';
import { FormDataService } from '../canpay-data/formData.service';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';
import { Personal } from '../canpay-data/formData.model';
import { CanpayWizardComponent, Step } from '../canpay-wizard/canpay-wizard.component';


import { interval } from 'rxjs';

declare var BancorConvertWidget: any;

export enum Status {
  New,
  PendingPurchase,
  InProgress,
  Completed
}

@Component({
  selector: 'canyalib-bancor-wc',
  templateUrl: './bancor-wc.component.html',
  styleUrls: ['./bancor-wc.component.css']
})
export class BancorWcComponent implements OnInit, AfterViewInit {
  @Output() check = new EventEmitter();
  @Output() valueChange = new EventEmitter();
  @Input() type = 'WITHOUT_INPUT_BOXES';
  @Input() balance = 0;
  @Input() set isLoading(isLoading: boolean) {
    if (!isLoading) {
      this.status = Status.New;
    }
  }
  @Input() formData: FormData;
  personal: Personal;
  currentBalance: Number;
  Status = Status;
  status: Status = Status.New;
  isLoadingBancorWidget = false;

  constructor(private renderer: Renderer2, private dialogService: DialogService,
    private formDataService: FormDataService, private canpayWizardComponent: CanpayWizardComponent) { }

  ngOnInit() {
    this.formData = this.formDataService.getFormData();
    this.personal = this.formDataService.getPersonal();
    const subscription = interval(50 * 60).subscribe(x => {
      this.canpayWizardComponent.checkBalanceAfterCredit(this.formData.address, this.balance);
    });
  }

  ngAfterViewInit() { }

  public callCanEx(balance) {
    this.valueChange.emit(Step.details);
  }

  addJsToElement(src: string): HTMLScriptElement {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    this.renderer.appendChild(document.body, script);
    return script;
  }

  open() {
    this.status = Status.PendingPurchase;
  }

  checkBalance() {
    console.log('in checkBalance');
    this.status = Status.InProgress;
    setTimeout(() => this.check.emit(), 2000);
  }

  cancel() {
    this.status = Status.New;
  }

}
