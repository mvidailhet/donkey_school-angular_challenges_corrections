import { Injectable } from '@angular/core';

export enum ROLE {
  ANONYMOUS = 'ANONYMOUS',
  USER = 'USER',
  ADMIN = 'ADMIN',
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _role = ROLE.USER;

  getRole() {
    return this._role;
  }
}
