import { Inject, Injectable, OnDestroy } from '@angular/core';
import { Http } from '@angular/http';
import merge from 'lodash.merge';

import { CanYaCoin } from '../contracts';
import { EthService } from './eth.service';

const DEFAULT_CONFIGS = {
  useTestNet: false,
  contracts: {
    canyaCoinAddress: '',
    canyaCoinAbi: CanYaCoin.abi
  }
};

@Injectable()
export class CanYaCoinEthService extends EthService {
  canyaContract: any;

  decimals = 6;

  constructor(@Inject('Config') private config: any = {}, http: Http) {
    super({ useTestNet: config.useTestNet }, http);
    this.config = merge(DEFAULT_CONFIGS, config);
    this.initContract();
  }

  initContract(abi = this.config.contracts.canyaCoinAbi, address = this.config.contracts.canyaCoinAddress) {
    console.log('CanYaCoinEthService configs: ', this.config);
    return this.canyaContract = this.createContractInstance(abi, address);
  }

  getAmountWithDecimals(canAmount: number): number {
    return canAmount * (10 ** this.decimals);
  }

  async getAllowance(owner: string, spender: string): Promise<number> {
    try {
      const allowance = await this.canyaContract.methods.allowance(owner, spender).call();
      console.log('Allowance: ', allowance);
      return Promise.resolve(allowance);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async getCanYaBalance(userAddress: string = this.getOwnerAccount()): Promise<string> {
    console.log('CanYaCoinEthService: getCanYaBalance: ', userAddress, this.canyaContract);
    try {
      if (userAddress) {
        const balance = await this.canyaContract.methods.balanceOf(userAddress).call();
        console.log('CAN balance: ', balance);
        const t = this.web3js.utils.toBN(balance);
        return Promise.resolve(t.div(this.web3js.utils.toBN(1000000)).toString());
      }

      return Promise.resolve('0.00');
    } catch (error) {
      console.error('CanYaCoinEthService: getCanYaBalance - error', error);
      return Promise.reject(error);
    }
  }

  authoriseCANPayment(toRecepient, amount, from: string = this.getOwnerAccount(), onTxHash: Function = null): Promise<any> {
    console.log('CanYaCoinEthService: authoriseCANPayment: ', from, toRecepient, amount);
    return new Promise(async (resolve, reject) => {
      const tx = await this.canyaContract.methods.approve(toRecepient, this.amountToCANTokens(amount));
      const gas = await tx.estimateGas();
      const gasPrice = await this.getDefaultGasPriceGwei();
      tx.send({ from, gas, gasPrice }, async (err, txHash) => this.resolveTransaction(err, from, txHash, resolve, reject, onTxHash));
    });
  }

  payWithCAN(toRecepient, amount, from = this.getOwnerAccount()): Promise<any> {
    console.log('CanYaCoinEthService: payWithCAN: ', from, toRecepient, amount);
    return new Promise(async (resolve, reject) => {
      const tx = await this.canyaContract.methods.transfer(toRecepient, this.amountToCANTokens(amount));
      const gas = await tx.estimateGas({ from });
      const gasPrice = await this.getDefaultGasPriceGwei();
      tx.send({ from, gas, gasPrice }, async (err, txHash) => this.resolveTransaction(err, from, txHash, resolve, reject));
    });
  }

  payWithEth(amount, to: string) {
    console.log('CanYaCoinEthService: payWithEther: ', amount);
    this.payWithEther(amount, to);
  }

  payWithERC20(amount, recipient, token, decimal, gas) {
    console.log('CanYaCoinEthService: payWithErc20Token: ', amount, token, decimal, gas);
    this.payWithErc20Token(this.config.contracts.canyaCoinAbi, recipient, amount, token, decimal, gas);
  }
}
