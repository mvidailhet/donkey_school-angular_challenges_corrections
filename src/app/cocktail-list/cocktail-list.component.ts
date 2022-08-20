import { Component } from '@angular/core';
import { Cocktail } from '../cocktail.model';
import { CocktailService } from '../cocktail.service';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss']
})
export class CocktailListComponent {
  cocktails!: Cocktail[];

  constructor(private cocktailService: CocktailService) {
    this.cocktailService.getCocktails().subscribe((cocktails: Cocktail[]) => {
      this.cocktails = cocktails;
    });
  }

}
