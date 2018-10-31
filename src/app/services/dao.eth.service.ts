import { Inject, Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { daoAbi } from 'src/app/contracts';

import { EthService } from 'canpay-lib';
import { environment } from '../../environments/environment';

declare let require: any;

@Injectable()
export class DaoEthService extends EthService {
  daoContract: any;

  constructor(@Inject('Config') private config: any = {}, http: Http) {
    super({ useTestNet: config.useTestNet }, http);
    this.daoContract = this.createContractInstance(daoAbi, environment.contracts.canYaDao);
  }

  async createUserEscrow(fromAccount = this.getOwnerAccount(), amount, onTxHash: Function): Promise<any> {
    console.log('createUserEscrow: ', this.daoContract, fromAccount, amount);
    return new Promise((resolve, reject) => {
      this.daoContract.methods.createUserEscrow(this.amountToCANTokens(amount))
        .send({ from: fromAccount, ...this.getDefaultGasParams() },
          async (err, txHash) => this.resolveTransaction(err, fromAccount, txHash, resolve, reject, onTxHash));
      // send the onTxHash method here to utilise the callback
    });
  }

  balanceOfUser(user = this.getOwnerAccount()) {
    return this.daoContract.methods.balanceOfUser(user).call();
  }

  balanceOfApp(appId) {
    return this.daoContract.methods.balanceOfApp(this.web3js.utils.fromAscii(appId)).call();
  }

}
