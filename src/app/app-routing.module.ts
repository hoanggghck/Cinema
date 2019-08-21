import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginAdminGuard } from './share/Guard/login-admin.guard';

const user = JSON.parse(localStorage.getItem('loginUser'));
let role = '';
if (user !== null) {
  role = user.MaLoaiNguoiDung;
} else {
  role = 'KhachHang';
}
let route = '';
if (role === 'KhachHang') {
  route = 'home';
} else if (role === 'QuanTri') {
  route = 'admin';
}

const routes: Routes = [
  { path: '', redirectTo: route, pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomeModule' },
  { path: 'admin', loadChildren: './admin/admin.module#AdminModule', canActivate: [LoginAdminGuard] },
  { path: '**', redirectTo: route, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
