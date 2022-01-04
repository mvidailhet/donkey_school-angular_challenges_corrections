import { Component } from '@angular/core';

export interface User {
  name: string;
  firstName: string;
  age: number;
  quote: string;
  photo: string;
}

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent {
  showAge = false;

  user: User = {
    name: 'Doe',
    firstName: 'John',
    age: 25,
    quote: '',
    photo: 'https://randomuser.me/api/portraits/lego/2.jpg',
  };

  toggleAgeShow(): void {
    this.showAge = !this.showAge;
  }
}
