import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Phim } from '../model/Phim';

@Injectable({
  providedIn: 'root'
})
export class LoginDatveGuard implements CanActivate {
  checkLogin(): boolean {
    const phim: Phim = JSON.parse(localStorage.getItem('ChiTietPhim'));
    if (localStorage.getItem('loginUser')) {
      let user: any;
      user = JSON.parse(localStorage.getItem('loginUser'));
      if (user.MaLoaiNguoiDung === 'KhachHang') {
        if (typeof phim !== 'string') {
          return true;
        } else { return false; }
      } else { return true; }
    } else { return true; }
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.checkLogin()) {
      return true;
    }
    alert('Lịch chiếu không tồn tại');
    this.router.navigate(['/home']);
  }
  constructor(private router: Router) {
  }
}
