import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {
  constructor(private guard: AuthService, private route: Router) {}

  canActivate() {
    if (!this.guard.IsLoggedIn()) {
      return true;
    }
    this.route.navigate(['profile']);
    return false;
  }
}
