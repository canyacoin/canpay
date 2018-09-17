import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { QRCodeModule } from 'angular2-qrcode';
import { ClipboardModule } from 'ngx-clipboard';
import { CanpayModule } from 'canpay-lib';
import { environment } from '../environments/environment';
import { CanPayExampleComponent } from './can-pay-example/can-pay-example.component';
import { DaoEthService } from 'src/app/services/dao.eth.service';
import { OrderComponent } from 'projects/canpay-lib/src/canexchange/order/order.component';
import { OrderService } from 'projects/canpay-lib/src/canexchange/order/order.service';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    CanPayExampleComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    ClipboardModule,
    QRCodeModule,
    FormsModule,
    CanpayModule.forRoot({
      useTestNet: environment.contracts.useTestNet,
      contracts: {
        canyaCoinAddress: environment.contracts.canYaCoin,
        // canyaAbi: <CanYaCoin_ABI> // default is set to prod CanYaCoin ABI
      }
    })
  ],
  providers: [DaoEthService, DatePipe, HttpClientModule, OrderService],
  bootstrap: [AppComponent],
})

export class AppModule { }
