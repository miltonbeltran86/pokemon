import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UthGuardService implements CanActivate{

  constructor(private authService: AuthService) { }

  canActivate(): Observable<boolean>{
    let authState = this.authService.isLoggedIn();
    if(!authState || !localStorage.getItem('bizPokemon')){
      this.authService.logout();
      return of(false);
    }
      else{
        return of(true);
      }
    
  }
}
