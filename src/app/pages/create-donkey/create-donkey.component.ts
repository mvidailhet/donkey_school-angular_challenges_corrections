import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { donkeyImages, donkeyOrigins } from 'src/app/data';
import { DonkeyService } from 'src/app/services/donkey.service';

@Component({
  selector: 'app-create-donkey',
  templateUrl: './create-donkey.component.html',
  styleUrls: ['./create-donkey.component.scss'],
})
export class CreateDonkeyComponent {
  donkeyForm!: FormGroup;
  origins = donkeyOrigins;
  images = donkeyImages;

  constructor(private formBuilder: FormBuilder, private donkeyService: DonkeyService) {
    this.createForm();
  }

  createForm() {
    this.donkeyForm = this.formBuilder.group({
      donkeyData: this.formBuilder.group({
        name: [null, [Validators.required]],
        origin: [null, [Validators.required]],
        birthday: ['2000-01-01', [Validators.required]],
        image: [null, [Validators.required]],
      }),
    });
  }

  onSubmit(): void {
    this.donkeyService.createDonkey(this.donkeyForm.value.donkeyData);
  }

  get name(): FormControl {
    return this.donkeyForm.get("donkeyData.name") as FormControl;
  }

  get origin(): FormControl {
    return this.donkeyForm.get("donkeyData.origin") as FormControl;
  }

  get birthday(): FormControl {
    return this.donkeyForm.get("donkeyData.birthday") as FormControl;
  }

  get image(): FormControl {
    return this.donkeyForm.get("donkeyData.image") as FormControl;
  }
}
