import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutHomeComponent } from './layout-home.component';
import { TrangChiTietComponent } from './trang-chi-tiet/trang-chi-tiet.component';
import { TrangChuComponent } from './trang-chu/trang-chu.component';
import { TrangDatVeComponent } from './trang-dat-ve/trang-dat-ve.component';
import { LoginUserGuard } from '../share/Guard/login-user.guard';
import { LoginDatveGuard } from '../share/Guard/login-datve.guard';

const homeRoutes: Routes = [
  {
    path: '', component: LayoutHomeComponent, children: [
      { path: '', component: TrangChuComponent },
      { path: 'trang-chu', component: TrangChuComponent },
      { path: 'trang-chi-tiet/:maPhim', component: TrangChiTietComponent },
      { path: 'trang-dat-ve/:maLichChieu', component: TrangDatVeComponent, canActivate: [LoginUserGuard, LoginDatveGuard] },
    ],
  },
  {
    path: '**', redirectTo: '', pathMatch: 'full'
  }

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
