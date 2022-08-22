import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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
      id: [null],
      name: [null],
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.searchForm);
  }

}
