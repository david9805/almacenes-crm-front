import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { VariablesService } from '../services/variables.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedGuard implements CanActivate {

  constructor(private variables:VariablesService, private router: Router) {}

  canActivate(): boolean {
    if (localStorage.getItem('usuario')) {
      return true;
    } else {
      this.router.navigate(['./']); // Redirige a la página de login
      return false;
    }
  }
}
