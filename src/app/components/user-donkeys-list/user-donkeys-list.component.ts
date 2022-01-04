import { Component } from '@angular/core';
import { Donkey, DonkeyService } from 'src/app/services/donkey.service';

@Component({
  selector: 'app-user-donkeys-list',
  templateUrl: './user-donkeys-list.component.html',
  styleUrls: ['./user-donkeys-list.component.scss'],
})
export class UserDonkeysListComponent {
  donkeys!: Donkey[];

  constructor(private donkeyService: DonkeyService) {
    this.donkeys = this.donkeyService.userDonkeys;
  }
}
