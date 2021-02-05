import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { StateService } from 'src/app/core/services/state.service';

@Component({
  selector: 'w-selected-amount',
  templateUrl: './selected-amount.component.html',
  styleUrls: ['./selected-amount.component.scss']
})
export class SelectedAmountComponent implements OnInit {

  public selectedValue: Observable<number>;

  constructor(
    private readonly stateService: StateService
  ) { }

  ngOnInit(): void {
    this.selectedValue = this.stateService.getSelectedAmount();
  }

}
