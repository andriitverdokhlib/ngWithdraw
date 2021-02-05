import { Component, OnDestroy, OnInit} from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { IWalletInfo } from 'src/app/core/models/wallet.model';

import { StateService } from 'src/app/core/services/state.service';

import { AlertComponent } from 'src/app/shared/components/alert/alert.component';

import { WALLETS } from '../card-carousel/wallets';


@Component({
  selector: 'w-submit-button',
  templateUrl: './submit-button.component.html',
  styleUrls: ['./submit-button.component.scss']
})
export class SubmitButtonComponent implements OnInit, OnDestroy {

  public selectedAmount: number;
  public selectedWallet: IWalletInfo;

  private readonly destroyer$: Subject<void> = new Subject();

  constructor(
    private stateService: StateService,
    private readonly snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.getState();
  }

  private getState() {

    this.stateService
      .getSelectedAmount()
      .pipe(takeUntil(this.destroyer$))
      .subscribe((amount: number) => this.selectedAmount = amount);

    this.stateService
      .getSelectedWallet()
      .pipe(takeUntil(this.destroyer$))
      .subscribe((wallet: IWalletInfo) => this.selectedWallet = wallet);

  }

  ngOnDestroy(): void {
    this.destroyer$.next();
    this.destroyer$.complete();
  }

  public submit(): void {
    this.takeFromCard();

    this.snackBar.openFromComponent(AlertComponent, {
      duration: 1000
    });
  }

  private takeFromCard(): void {
    WALLETS.forEach((wallet, index, array) => {
      if(wallet.cardType === this.selectedWallet.cardType) {
        array[index].amount -= this.selectedAmount;
      }
    })

  }
}
