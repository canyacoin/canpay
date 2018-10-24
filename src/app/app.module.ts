import { Injector, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { ClipboardModule } from 'ngx-clipboard';

import { DaoEthService } from 'src/app/services/dao.eth.service';

import { CanpayModule } from 'canpay-lib';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CanPayExampleComponent } from './can-pay-example/can-pay-example.component';

@NgModule({
  declarations: [
    AppComponent,
    CanPayExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    CanpayModule.forRoot({
      useTestNet: environment.contracts.useTestNet,
      contracts: {
        canyaCoinAddress: environment.contracts.canYaCoin,
        // canyaAbi: <CanYaCoin_ABI> // default is set to prod CanYaCoin ABI
      }
    })
  ],
  providers: [DaoEthService],
  bootstrap: [AppComponent],
})

export class AppModule { }
