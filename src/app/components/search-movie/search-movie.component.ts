import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.scss']
})
export class SearchMovieComponent implements OnInit {
  searchForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.initSearchForm();
  }

  initSearchForm() {
    this.searchForm = this.formBuilder.group({
      searchData: this.formBuilder.group({
        id: [],
        name: [],
      }),
      year: [null, [Validators.required, this.rangeDateValidator]],
    });
  }

  rangeDateValidator(control: AbstractControl) {
    if (control.value < 1900) return { min: true };
    const currentYear = new Date().getFullYear();
    if (control.value > currentYear) return { max: true };
    return null;
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
