import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.scss']
})
export class SearchMovieComponent implements OnInit {
  searchForm!: FormGroup;

  minMaxYears = {
    min: 1900,
    max: new Date().getFullYear(),
  }

  constructor(private formBuilder: FormBuilder) {
    this.initSearchForm();
  }

  initSearchForm() {
    this.searchForm = this.formBuilder.group({
      searchData: this.formBuilder.group({
        id: [],
        name: [],
      }),
      year: [null, [Validators.required, this.rangeDataValidatorCreator(this.minMaxYears.min, this.minMaxYears.max)]],
    });
  }

  rangeDataValidatorCreator(min: number, max: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.value < min) return { min: true };
      if (control.value > max) return { max: true };
      return null;
    }
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.searchForm);
  }

  get year(): FormControl {
    return this.searchForm.get('year') as FormControl;
  }
}
