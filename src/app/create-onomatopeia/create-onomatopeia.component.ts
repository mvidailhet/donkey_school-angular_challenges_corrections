import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-create-onomatopeia',
  templateUrl: './create-onomatopeia.component.html',
  styleUrls: ['./create-onomatopeia.component.scss']
})
export class CreateOnomatopeiaComponent {
  @Output() onCreateOnomatopeia = new EventEmitter<string>();

  newOnomatopeia?: string;

  onSubmit() {
    if (!this.newOnomatopeia) return;
    this.onCreateOnomatopeia.emit(this.newOnomatopeia);
    this.newOnomatopeia = '';
  }
}
