import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
} from '@angular/router';
import { ROLE, UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root',
})
export class IsAdminGuard implements CanActivate {

  constructor(private userService: UserService) {}

  canActivate(
    _route: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot
  ): boolean {
    return this.userService.getRole() === ROLE.ADMIN;
  }
}
