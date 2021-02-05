import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { CarouselModule } from 'ngx-owl-carousel-o';

import { WithdrawComponent } from './withdraw/withdraw.component';
import { WalletComponent } from './withdraw/card-carousel/wallet/wallet.component';
import { AmountListComponent } from './withdraw/amount-list/amount-list.component';
import { CardCarouselComponent } from './withdraw/card-carousel/card-carousel.component';
import { AmountSliderComponent } from './withdraw/amount-slider/amount-slider.component';
import { SelectedAmountComponent } from './withdraw/selected-amount/selected-amount.component';
import { SubmitButtonComponent } from './withdraw/submit-button/submit-button.component';


@NgModule({
  declarations: [
    WithdrawComponent, 
    WalletComponent, 
    AmountListComponent, 
    CardCarouselComponent,
    AmountSliderComponent,
    SelectedAmountComponent,
    SubmitButtonComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CarouselModule
  ],
  exports: [WithdrawComponent]
})
export class MainModule { }
