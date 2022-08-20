import { Component } from '@angular/core';

@Component({
  selector: 'app-create-onomatopeia',
  templateUrl: './create-onomatopeia.component.html',
  styleUrls: ['./create-onomatopeia.component.scss']
})
export class CreateOnomatopeiaComponent {
  newOnomatopeia?: string;

  onSubmit() {
    if (!this.newOnomatopeia) return;
    console.log(this.newOnomatopeia);
  }
}
