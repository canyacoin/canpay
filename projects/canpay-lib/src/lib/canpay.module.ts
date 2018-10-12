import { CommonModule } from '@angular/common';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { PaymentDetailsComponent } from './canpay-payment-details/payment-details.component';
import { StagingDetailsComponent } from './canpay-payment-staging/staging.component';
import { ResultDetailsComponent } from './canpay-payment-qr/result.component';
import { PaymentERCDetailsComponent } from './canpay-erc20-listing/payment-erc20.component';
import { CompleteDetailsComponent } from './canpay-payment-complete/complete.component';
import { BancorWcComponent } from './bancor-wc/bancor-wc.component';
import { CanpayModalComponent } from './canpay-modal/canpay-modal.component';
import { CanpayWizardComponent } from './canpay-wizard/canpay-wizard.component';
import { CommaSepNumPipe } from './comma-sep-num.pipe';
import { InputAmountComponent } from './input-amount/input-amount.component';
import { LoadingStatusComponent } from './loading-status/loading-status.component';
import { FaqComponent } from './metamask/faq/faq.component';
import { InstructionsComponent } from './metamask/instructions/instructions.component';
import { MetamaskComponent } from './metamask/metamask.component';
import { MsgBoxComponent } from './msg-box/msg-box.component';
import {
  PaymentAuthorisationComponent
} from './payment-authorisation/payment-authorisation.component';
import { PaymentComponent } from './payment/payment.component';
import { ProcessComponent } from './process/process.component';
import { CanPayService } from './services/canpay.service';
import { CanYaCoinEthService } from './services/canyacoin-eth.service';
import { EthService } from './services/eth.service';
import { StagingDetailsService } from './canpay-payment-staging/staging.service';
import { PaymentDetailsServiceERC } from './canpay-erc20-listing/payment-erc20.service';
import { PaymentDetailsService } from './canpay-payment-details/payment-details.service';
import { CompleteDetailsService } from './canpay-payment-complete/complete.service';
import { FormDataService } from './canpay-data/formData.service';
import { ResultService } from './canpay-payment-qr/result.service';

import { QRCodeModule } from 'angular2-qrcode';
import { ClipboardModule } from 'ngx-clipboard';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { OrderComponent } from '../canexchange/order/order.component';
import { ErrorComponent } from '../canexchange/error/error.component';
import { OrderService } from '../canexchange/order/order.service';
import { ResizeService } from '../lib/services/resize.service';
import { LoaderComponent } from '../canexchange/loader/loading-status.component';

const COMPONENTS = [
  CanpayModalComponent,
  CanpayWizardComponent,
  MetamaskComponent,
  FaqComponent,
  InstructionsComponent,
  LoadingStatusComponent,
  BancorWcComponent,
  PaymentAuthorisationComponent,
  PaymentComponent,
  ProcessComponent,
  MsgBoxComponent,
  InputAmountComponent,
  CommaSepNumPipe,
  ErrorComponent,
  OrderComponent,
  LoaderComponent,
  PaymentDetailsComponent,
  StagingDetailsComponent,
  PaymentERCDetailsComponent,
  CompleteDetailsComponent,
  ResultDetailsComponent
];

const PROVIDERS = [
  EthService, CanYaCoinEthService, CanPayService, FormDataService,
  HttpClientModule, OrderService, ResizeService, StagingDetailsService, PaymentDetailsServiceERC,
  CompleteDetailsService, PaymentDetailsService, ResultService
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BootstrapModalModule.forRoot({ container: document.body }),
    ClipboardModule,
    QRCodeModule
  ],
  entryComponents: [
    CanpayModalComponent,
    OrderComponent
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
  providers: PROVIDERS
})
export class CanpayModule {
  static forRoot(config: any): ModuleWithProviders {
    return {
      ngModule: CanpayModule,
      providers: [{ provide: 'Config', useValue: config }]
    };
  }
}
