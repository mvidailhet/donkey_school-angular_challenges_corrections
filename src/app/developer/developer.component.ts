import { Component, OnInit } from '@angular/core';
import { Developer } from '../common/developer.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.scss']
})
export class DeveloperComponent implements OnInit {
  developer?: Developer;

  constructor() { }

  ngOnInit(): void {
    this.developer = {
      firstName: 'Michel',
      lastName: 'Vidailhet',
      age: 36,
      bio: 'Un dev de ouf',
      sexe: 'homme',
      skills: [
        {
          name: 'Angular',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png',
          site: 'https://angular.io/'
        },
        {
          name: 'Symfony',
          logo: 'https://symfony.com/logos/symfony_black_03.png',
          site: 'https://symfony.com/'
        }
      ],
    }
  }

}
