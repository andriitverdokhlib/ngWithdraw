import { Component} from '@angular/core';

import { OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';
import { CAROUSEL_OPTIONS } from 'src/app/main/withdraw/card-carousel/config/carousel.config';

import { IWalletInfo } from 'src/app/core/models/wallet.model';
import { WALLETS } from './wallets';

import { StateService } from 'src/app/core/services/state.service';


@Component({
  selector: 'w-card-carousel',
  templateUrl: './card-carousel.component.html',
  styleUrls: ['./card-carousel.component.scss']
})
export class CardCarouselComponent {

  public readonly carouselOptions: OwlOptions = CAROUSEL_OPTIONS;
  public readonly wallets: IWalletInfo[] = WALLETS;

  constructor(
    private readonly stateService: StateService
  ) { }

  public selectedWallet(selected: SlidesOutputData): void {
    this.stateService.setSelectedWallet(this.wallets[selected.startPosition])
  }

}
