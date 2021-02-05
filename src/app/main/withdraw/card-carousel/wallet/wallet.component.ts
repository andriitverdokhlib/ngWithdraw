import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WalletComponent {

  @Input('amount')
  public readonly amount: string;

  @Input('cardType')
  public readonly cardType: string;

}
