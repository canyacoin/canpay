import { CommonModule } from '@angular/common';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { PaymentDetailsComponent } from './canpay-payment-details/payment-details.component';
import { StagingDetailsComponent } from './canpay-staging-qr/staging.component';
import { PaymentERCDetailsComponent } from './canpay-erc20-listing/payment-erc20.component';
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
import { StagingDetailsService } from './canpay-staging-qr/staging.service';
import { PaymentDetailsServiceERC } from './canpay-erc20-listing/payment-erc20.service';

import { FormDataService } from '../canexchange/data/formData.service';
import { WorkflowService } from '../canexchange/workflow/workflow.service';
import { DetailsService } from '../canexchange/details/details.service';
import { ResultService } from '../canexchange/result/result.service';
import { CompleteService } from '../canexchange/complete/complete.service';
import { PaymentService } from '../canexchange/payment/payment.service';
import { QRCodeModule } from 'angular2-qrcode';
import { ClipboardModule } from 'ngx-clipboard';
import { HomeComponent } from '../canexchange/home/home.component';
import { StagingComponent } from '../canexchange/staging/staging.component';
import { StagingService } from '../canexchange/staging/staging.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { DetailsComponent } from '../canexchange/details/details.component';
import { PaymentsComponent } from '../canexchange/payment/payment.component';
import { ResultComponent } from '../canexchange/result/result.component';
import { CompleteComponent } from '../canexchange/complete/complete.component';
import { OrderComponent } from '../canexchange/order/order.component';
import { ErrorComponent } from '../canexchange/error/error.component';
import { OrderService } from '../canexchange/order/order.service';
import { PaymentServiceERC } from '../canexchange/payment-erc20/payment-erc20.service';
import { PaymentERCComponent } from '../canexchange/payment-erc20/payment-erc20.component';
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
  DetailsComponent,
  ResultComponent,
  PaymentsComponent,
  CompleteComponent,
  StagingComponent,
  OrderComponent,
  PaymentERCComponent,
  HomeComponent,
  LoaderComponent,
  PaymentDetailsComponent,
  StagingDetailsComponent,
  PaymentERCDetailsComponent
];

const PROVIDERS = [
  EthService, CanYaCoinEthService, CanPayService, StagingService, PaymentServiceERC, FormDataService, WorkflowService, DetailsService,
  ResultService, CompleteService, PaymentService, HttpClientModule, OrderService, ResizeService, StagingDetailsService, PaymentDetailsServiceERC
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
    CanpayModalComponent, DetailsComponent, ResultComponent, PaymentsComponent, CompleteComponent, StagingComponent,
    OrderComponent, PaymentERCComponent, HomeComponent
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
