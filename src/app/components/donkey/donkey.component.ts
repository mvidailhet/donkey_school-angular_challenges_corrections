import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Donkey } from 'src/app/services/donkey.service';

@Component({
  selector: 'app-donkey',
  templateUrl: './donkey.component.html',
  styleUrls: ['./donkey.component.scss']
})
export class DonkeyComponent {
  @Input() donkey: Donkey | undefined;
  @Input() canAdopt = false;
  @Input() small = false;
  @Output() adoptClick = new EventEmitter();

  adopt(): void {
    this.adoptClick.emit();
  }
}
