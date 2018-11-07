import { Component, EventEmitter, Input, OnInit, Output, Renderer2 } from '@angular/core';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';
import { Subscription } from 'rxjs';

import { CanpayWizardComponent, Step } from '../canpay-wizard/canpay-wizard.component';
import { FormData, FormDataService, Personal } from '../services/formData.service';

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
export class BancorWcComponent implements OnInit {
  @Output() check = new EventEmitter();
  @Output() valueChange = new EventEmitter();
  @Input() type = 'WITHOUT_INPUT_BOXES';
  @Input() balance = 0;
  @Input() disableCanEx;
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

  balanceSub: Subscription;

  constructor(private renderer: Renderer2, private dialogService: DialogService,
    private formDataService: FormDataService, private canpayWizardComponent: CanpayWizardComponent) { }

  ngOnInit() {
    this.formData = this.formDataService.getFormData();
    this.personal = this.formDataService.getPersonal();
    if (this.isBancorLoaded()) { return; }

    this.isLoadingBancorWidget = true;
    this.addJsToElement('https://widget-convert.bancor.network/v1').onload = () => {
      console.log('BancorConvertWidget Tag loaded');
      this.isLoadingBancorWidget = false;
      this.initBancorWidget();
    };
  }

  isBancorLoaded() {
    try {
      if (BancorConvertWidget) { return true; }
    } catch (e) { console.log('BancorConvertWidget is not initialized'); }

    return false;
  }

  initBancorWidget() {
    if (!this.isBancorLoaded()) { return; }

    BancorConvertWidget.init({
      'type': this.type,
      'baseCurrencyId': '5a6f61ece3de16000123763a',
      'pairCurrencyId': '5937d635231e97001f744267',
      'primaryColor': '#00BFFF',
      'primaryColorHover': '55DAFB'
    });
  }


  public callCanex() {
    this.valueChange.emit(Step.canexPaymentOptions);
  }

  addJsToElement(src: string): HTMLScriptElement {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    this.renderer.appendChild(document.body, script);
    return script;
  }

  open() {
    BancorConvertWidget.showConvertPopup('buy');
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
