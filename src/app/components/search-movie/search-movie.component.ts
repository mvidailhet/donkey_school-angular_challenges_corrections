import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

enum TYPES {
  FILM = 'film',
  TV_SHOW = 'série',
  EPISODE = 'épisode',
};

enum INFO {
  COMPLETE = 'complète',
  SHORT = 'short',
};

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.scss'],
})
export class SearchMovieComponent implements OnInit {
  TYPES = TYPES;
  INFO = INFO;
  searchForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.initSearchFormGroup();
  }

  initSearchFormGroup() {
    this.searchForm = this.formBuilder.group({
      searchData: this.formBuilder.group({
        id: [],
        title: [],
      }),
      year: [undefined, Validators.required],
      type: ['TV_SHOW'],
      info: [],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.searchForm);
  }
}
