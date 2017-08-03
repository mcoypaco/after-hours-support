import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable()
export class RedirectIfAuthenticatedGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean {

    // If the user is logged in redirect to home page
    if(this.authService.isLoggedIn()) {
      this.router.navigate(['/']);
      return false;
    }
    // else activate login page
    return true;
  }
}
