import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { IWalletInfo } from '../models/wallet.model';

import { WALLETS } from '../../main/withdraw/card-carousel/wallets';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private readonly initWalletValue = WALLETS[0];

  private readonly selectedAmount: BehaviorSubject<number> = new BehaviorSubject(20);
  private readonly selectedWallet: BehaviorSubject<IWalletInfo> = new BehaviorSubject({...this.initWalletValue});

  public setSelectedAmount(selectedAmount: number): void {
    this.selectedAmount.next(selectedAmount);
  }

  public getSelectedAmount(): Observable<number> {
    return this.selectedAmount.asObservable();
  }

  public setSelectedWallet(wallet: IWalletInfo): void {
    this.selectedWallet.next(wallet);
  }

  public getSelectedWallet(): Observable<IWalletInfo> {
    return this.selectedWallet.asObservable();
  }
}
