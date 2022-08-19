import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

enum TYPES {
  FILM = 'film',
  TV_SHOW = 'série',
  EPISODE = 'épisode',
}

enum INFO {
  COMPLETE = 'complète',
  SHORT = 'short',
}

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.scss'],
})
export class SearchMovieComponent implements OnInit {
  TYPES = TYPES;
  INFO = INFO;
  searchForm!: FormGroup;

  acceptedYears = {
    minYear: 1900,
    maxYear: new Date().getFullYear(),
  };

  constructor(private formBuilder: FormBuilder) {
    this.initSearchFormGroup();
  }

  initSearchFormGroup() {
    this.searchForm = this.formBuilder.group({
      searchData: this.formBuilder.group(
        {
          id: [],
          title: [],
        },
        {
          validator: this.isRequiredValidator('id', 'title'),
        }
      ),
      year: [
        undefined,
        [
          Validators.required,
          this.rangeDateValidator(
            this.acceptedYears.minYear,
            this.acceptedYears.maxYear
          ),
        ],
      ],
      type: ['TV_SHOW'],
      info: [],
    });
    this.searchForm.controls['info'].patchValue('SHORT');
  }

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.searchForm);
  }

  rangeDateValidator(minYear: number, maxYear: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      let errors = {};
      if (control.value < minYear) errors = { ...errors, min: true };
      if (control.value > maxYear) errors = { ...errors, max: true };

      const isEmpty = (obj: { [s: string]: any }) => {
        return Object.keys(obj).length === 0;
      };

      if (isEmpty(errors)) return null;

      return errors;
    };
  }

  isRequiredValidator(control1Name: string, control2Name: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const idIsEmpty = !control.get(control1Name)?.value;
      const titleIsEmpty = !control.get(control2Name)?.value;
      if (idIsEmpty && titleIsEmpty) {
        return { isRequired: true };
      }
      return null;
    };
  }

  get year(): FormControl {
    return this.searchForm.get('year') as FormControl;
  }

  get searchData(): FormGroup {
    return this.searchForm.get('searchData') as FormGroup;
  }
}
