import { Component } from '@angular/core';
import { Donkey, DonkeyService } from 'src/app/services/donkey.service';

@Component({
  selector: 'app-donkeys-list',
  templateUrl: './donkeys-list.component.html',
  styleUrls: ['./donkeys-list.component.scss'],
})
export class DonkeysListComponent {
  donkeys!: Donkey[];

  constructor(private donkeyService: DonkeyService) {
    this.donkeys = this.donkeyService.donkeys;
  }
}
