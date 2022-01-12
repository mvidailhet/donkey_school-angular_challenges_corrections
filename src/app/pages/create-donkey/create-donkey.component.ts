import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-donkey',
  templateUrl: './create-donkey.component.html',
  styleUrls: ['./create-donkey.component.scss'],
})
export class CreateDonkeyComponent {
  donkeyForm: FormGroup = this.createForm();

  constructor(private formBuilder: FormBuilder) {}

  createForm(): FormGroup {
    return this.formBuilder.group({
      donkeyData: this.formBuilder.group({
        name: [null, [Validators.required]],
      }),
    });
  }

  submitForm() {
    console.log(this.donkeyForm);
  }

  get name(): FormControl {
    return this.donkeyForm.get('donkeyData.name') as FormControl;
  }
}
