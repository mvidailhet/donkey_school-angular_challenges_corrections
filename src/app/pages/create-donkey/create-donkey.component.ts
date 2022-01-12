import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { donkeyImages, donkeyOrigins } from 'src/app/data';

@Component({
  selector: 'app-create-donkey',
  templateUrl: './create-donkey.component.html',
  styleUrls: ['./create-donkey.component.scss'],
})
export class CreateDonkeyComponent {
  donkeyForm: FormGroup = this.createForm();
  origins = donkeyOrigins;
  images = donkeyImages;

  constructor(private formBuilder: FormBuilder) {}

  createForm(): FormGroup {
    return this.formBuilder.group({
      donkeyData: this.formBuilder.group({
        name: [null, [Validators.required]],
        email: [null, [Validators.required, Validators.email]],
        origin: [null, [Validators.required]],
        image: [null, [Validators.required]],
      }),
    });
  }

  submitForm() {
    console.log(this.donkeyForm);
    if(!this.donkeyForm.valid) {
      this.donkeyForm.markAllAsTouched();
      return;
    }
  }

  get name(): FormControl {
    return this.donkeyForm.get('donkeyData.name') as FormControl;
  }

  get email(): FormControl {
    return this.donkeyForm.get('donkeyData.email') as FormControl;
  }

  get origin(): FormControl {
    return this.donkeyForm.get('donkeyData.origin') as FormControl;
  }

  get image(): FormControl {
    return this.donkeyForm.get('donkeyData.image') as FormControl;
  }
}
