import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutHomeComponent } from './layout-home.component';
import { DienAnhComponent } from './dien-anh/dien-anh.component';
import { FormlienheComponent } from './formlienhe/formlienhe.component';
import { HeaderComponent } from './header/header.component';
import { ItemPhimComponent } from './item-phim/item-phim.component';
import { KhuyenMaiComponent } from './khuyen-mai/khuyen-mai.component';
import { LienHeComponent } from './lien-he/lien-he.component';
import { LoaiPhimComponent } from './loai-phim/loai-phim.component';
import { PhimDangChieuComponent } from './phim-dang-chieu/phim-dang-chieu.component';
import { PhimSapChieuComponent } from './phim-sap-chieu/phim-sap-chieu.component';
import { ReviewComponent } from './review/review.component';
import { SliderComponent } from './slider/slider.component';
import { ThongTinLienHeComponent } from './thong-tin-lien-he/thong-tin-lien-he.component';
import { TinTucComponent } from './tin-tuc/tin-tuc.component';
import { ItemTinTucComponent } from './item-tin-tuc/item-tin-tuc.component';
import { LayoutModule } from '../layout/layout.module';
import { TrangChiTietComponent } from './trang-chi-tiet/trang-chi-tiet.component';
import { LichChieuComponent } from './lich-chieu/lich-chieu.component';
import { NoiDungComponent } from './noi-dung/noi-dung.component';
import { HomeRoutingModule } from './home-routing.module';
import { TrangChuComponent } from './trang-chu/trang-chu.component';
import { UngDungComponent } from './ung-dung/ung-dung.component';
import { PipeModule } from '../share/pipe/pipe.module';
import { TrangDatVeComponent } from './trang-dat-ve/trang-dat-ve.component';
import { GheComponent } from './ghe/ghe.component';
import { DanhSachGheComponent } from './danh-sach-ghe/danh-sach-ghe.component';
import { TimKiemComponent } from './tim-kiem/tim-kiem.component';
import { ComboBapNuocComponent } from './combo-bap-nuoc/combo-bap-nuoc.component';
import { ItemComboComponent } from './item-combo/item-combo.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';


@NgModule({
  declarations: [
    LayoutHomeComponent,
    DienAnhComponent,
    FormlienheComponent,
    HeaderComponent,
    ItemPhimComponent,
    KhuyenMaiComponent,
    LienHeComponent,
    LoaiPhimComponent,
    PhimDangChieuComponent,
    PhimSapChieuComponent,
    ReviewComponent,
    SliderComponent,
    ThongTinLienHeComponent,
    TinTucComponent,
    ItemTinTucComponent,
    TrangChiTietComponent,
    LichChieuComponent,
    NoiDungComponent,
    TrangChuComponent,
    UngDungComponent,
    TrangDatVeComponent,
    GheComponent,
    DanhSachGheComponent,
    TimKiemComponent,
    ComboBapNuocComponent,
    ItemComboComponent,
   ],
  imports: [
    CommonModule,
    LayoutModule,
    HomeRoutingModule,
    PipeModule,
    SweetAlert2Module.forRoot({
      buttonsStyling: false,
      customClass: 'modal-content',
      confirmButtonClass: 'btn btn-primary',
      cancelButtonClass: 'btn'
  })
  ],
  exports: [
    LayoutHomeComponent,
    DienAnhComponent,
    FormlienheComponent,
    HeaderComponent,
    ItemPhimComponent,
    KhuyenMaiComponent,
    LienHeComponent,
    LoaiPhimComponent,
    PhimDangChieuComponent,
    PhimSapChieuComponent,
    ReviewComponent,
    SliderComponent,
    ThongTinLienHeComponent,
    TinTucComponent,
    ItemTinTucComponent,
    TrangChuComponent
  ]
})
export class HomeModule { }
