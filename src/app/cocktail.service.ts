import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Cocktail } from './cocktail.model';

interface JSONCocktails {
  cocktails: Cocktail[];
}

@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  cocktails?: Cocktail[];

  constructor(private httpClient: HttpClient) {}

  getCocktailsFromJSON() {
    return this.httpClient.get<JSONCocktails>('assets/cocktails.json');
  }

  getCocktails(): Observable<Cocktail[]> {
    return this.getCocktailsFromJSON().pipe(
      map((jsonCocktails: JSONCocktails) => {
        return jsonCocktails.cocktails;
      })
    );
  }
}
