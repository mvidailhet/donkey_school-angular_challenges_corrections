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
      skills: [],
    }
  }

}
