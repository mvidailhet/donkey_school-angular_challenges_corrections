import { Component } from '@angular/core';
import { DonkeyService } from 'src/app/services/donkey.service';

@Component({
  selector: 'app-donkey-list',
  templateUrl: './donkey-list.component.html',
  styleUrls: ['./donkey-list.component.scss']
})
export class DonkeyListComponent {
  donkeys = this.donkeyService.donkeys;

  constructor(private donkeyService: DonkeyService) { }

}
