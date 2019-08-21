import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginAdminGuard implements CanActivate {
  checkLogin(): boolean {
    if (localStorage.getItem('loginUser')) {
      let user: any;
      user = JSON.parse(localStorage.getItem('loginUser'));
      if (user.MaLoaiNguoiDung === 'QuanTri') {
        return true;
      } else { return false; }
    }
    return false;
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.checkLogin()) {
      return true;
    }
    alert('Vui lòng đăng nhập tài khoản admin');
    this.router.navigate(['/home']);
  }
  constructor(private router: Router) {
  }
}
