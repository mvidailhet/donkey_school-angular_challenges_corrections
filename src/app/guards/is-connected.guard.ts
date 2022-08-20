import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { ROLE, UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root',
})
export class IsConnectedGuard implements CanActivate {
  constructor(private userService: UserService) {}

  canActivate(
    _route: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot
  ): boolean {
    return this.userService.getRole() !== ROLE.ANONYMOUS;
  }
}
