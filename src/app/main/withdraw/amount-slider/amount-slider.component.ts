import { Component, OnInit } from '@angular/core';

import { MatSliderChange } from '@angular/material/slider';

import { StateService } from 'src/app/core/services/state.service';

import { Observable } from 'rxjs';


@Component({
  selector: 'w-amount-slider',
  templateUrl: './amount-slider.component.html',
  styleUrls: ['./amount-slider.component.scss']
})
export class AmountSliderComponent implements OnInit {
  
  public slideValue: Observable<number>;

  constructor(
    private readonly stateService: StateService
  ) { }

  ngOnInit(): void {
    this.slideValue = this.stateService.getSelectedAmount();
  }

  public selectedAmount(selected: MatSliderChange): void {
    this.stateService.setSelectedAmount(selected.value);
  }

}
