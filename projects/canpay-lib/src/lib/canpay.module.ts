import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { QRCodeModule } from 'angular2-qrcode';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { ClipboardModule } from 'ngx-clipboard';

import { ResizeService } from '../lib/services/resize.service';
import { BancorWcComponent } from './bancor-wc/bancor-wc.component';
import { FormDataService } from './canpay-data/formData.service';
import { PaymentERCDetailsComponent } from './canpay-erc20-listing/payment-erc20.component';
import { PaymentDetailsServiceERC } from './canpay-erc20-listing/payment-erc20.service';
import { LoaderComponent } from './canpay-loader/loading-status.component';
import { CanpayModalComponent } from './canpay-modal/canpay-modal.component';
import { OrderComponent } from './canpay-order/order.component';
import { OrderService } from './canpay-order/order.service';
import { CompleteDetailsComponent } from './canpay-payment-complete/complete.component';
import { CompleteDetailsService } from './canpay-payment-complete/complete.service';
import { PaymentDetailsComponent } from './canpay-payment-details/payment-details.component';
import { PaymentDetailsService } from './canpay-payment-details/payment-details.service';
import { ErrorComponent } from './canpay-payment-error/error.component';
import { ResultDetailsComponent } from './canpay-payment-qr/result.component';
import { ResultService } from './canpay-payment-qr/result.service';
import { StagingDetailsComponent } from './canpay-payment-staging/staging.component';
import { StagingDetailsService } from './canpay-payment-staging/staging.service';
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
  OrderComponent,
  PaymentDetailsComponent,
  StagingDetailsComponent,
  PaymentERCDetailsComponent,
  CompleteDetailsComponent,
  ResultDetailsComponent,
  ErrorComponent,
  LoaderComponent
];

const PROVIDERS = [
  EthService, CanYaCoinEthService, CanPayService, FormDataService,
  OrderService, ResizeService, StagingDetailsService, PaymentDetailsServiceERC,
  CompleteDetailsService, PaymentDetailsService, ResultService
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
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
