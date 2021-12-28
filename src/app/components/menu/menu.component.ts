import { Component } from '@angular/core';

export interface Route {
  name: string;
  path: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  routes: Route[] = [
    {
      name: 'home',
      path: '/home'
    },
    {
      name: 'signup',
      path: '/signup'
    },
    {
      name: 'user',
      path: '/user'
    }
  ]

}
