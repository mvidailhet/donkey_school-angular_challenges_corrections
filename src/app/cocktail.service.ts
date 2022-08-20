import { Injectable } from '@angular/core';
import { Cocktail } from './cocktail.model';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
  cocktails: Cocktail[] = [];

  getCocktails() {
    return this.cocktails;
  }
}
