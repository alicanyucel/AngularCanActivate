import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class authGuard implements CanActivate {
  
  constructor(private _router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot){
      if(localStorage.getItem("token"))
    return true;
  this._router.navigateByUrl("/login");
  return false
  }
}
