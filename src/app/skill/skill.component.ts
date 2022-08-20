import { Component, Input, OnInit } from '@angular/core';
import { Skill } from '../common/skill.model';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {
  skill?: Skill;

  constructor() { }

  ngOnInit(): void {
    this.skill = {
      name: 'Angular',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png',
      site: 'https://angular.io/'
    }
  }

}
