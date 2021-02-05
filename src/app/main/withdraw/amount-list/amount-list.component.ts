import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { StateService } from 'src/app/core/services/state.service';

import { AMOUNTS_SHORTCUTS } from './amount-shortcuts';

@Component({
  selector: 'w-amount-list',
  templateUrl: './amount-list.component.html',
  styleUrls: ['./amount-list.component.scss']
})
export class AmountListComponent implements OnInit {

  public readonly amountShortCusts: number[] = AMOUNTS_SHORTCUTS;

  public selectedAmount: Observable<number>

  constructor(
    private readonly stateService: StateService
  ) { }

  ngOnInit(): void {
    this.selectedAmount = this.stateService.getSelectedAmount();
  }

  public chipSelected(selectedChip: number): void {
    this.stateService.setSelectedAmount(selectedChip);
  }

}
