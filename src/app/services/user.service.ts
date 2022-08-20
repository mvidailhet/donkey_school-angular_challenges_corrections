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
  private _role = ROLE.ANONYMOUS;

  getRole() {
    return this._role;
  }
}
