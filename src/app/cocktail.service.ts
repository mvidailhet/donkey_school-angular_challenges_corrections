import { Injectable } from '@angular/core';
import { Cocktail } from './cocktail.model';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
  cocktails: Cocktail[] = [
    {
      name: 'mojito',
      price: 12,
      img: 'https://media.istockphoto.com/photos/mojito-cocktail-picture-id157311412?k=20&m=157311412&s=612x612&w=0&h=yEf4Ny1E7taHCJfmhF4TAYjbA4jXsPsXc9HGrGGNwiU='
    },
    {
      name: 'sex on the beach',
      price: 14,
      img: 'https://images.assetsdelivery.com/compings_v2/chandlervid85/chandlervid851805/chandlervid85180500060.jpg'
    }
  ];

  getCocktails() {
    return this.cocktails;
  }
}
