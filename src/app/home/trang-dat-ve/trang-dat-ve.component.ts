import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DanhSachGheComponent } from '../danh-sach-ghe/danh-sach-ghe.component';
import { VeService } from 'src/app/share/service/ve.service';
import { Phim } from 'src/app/share/model/Phim';
import swal from 'sweetalert2';
@Component({
  selector: 'app-trang-dat-ve',
  templateUrl: './trang-dat-ve.component.html',
  styleUrls: ['./trang-dat-ve.component.scss']
})
export class TrangDatVeComponent implements OnInit {

  @Input() ComboStatus;
  @ViewChild(DanhSachGheComponent) dsGhe: DanhSachGheComponent;
  public MaLichChieu: string;
  public DanhSachGhe: any[] = [];
  phim: Phim = JSON.parse(localStorage.getItem('ChiTietPhim'));
  userName = JSON.parse(localStorage.getItem('loginUser')).HoTen;
  tienVe = 0;
  tienCombo = 0;
  tongTien = 0;
  phut = 5;
  giay = 0;
  constructor(private route: ActivatedRoute, private veService: VeService, private router: Router) { }

  scrollToElement(id): void {
    const element = document.getElementById(id);
    console.log(id);
    element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'center' });
  }

  demNguoc() {
    const timeout = setTimeout(() => {
      this.giay--;
      this.demNguoc();
    }, 1000);
    if (this.giay === -1) {
      this.phut -= 1;
      this.giay = 59;
    }
    if (this.phut === -1) {
      clearTimeout(timeout);
      
      swal.fire('','hết giờ', "warning")
      this.router.navigate(['/home']);
    }
  }
  LayTaiKhoanNguoiDung() {
    const nguoiDungHienTai = JSON.parse(localStorage.getItem('loginUser'));
    if (nguoiDungHienTai !== null) {
      return nguoiDungHienTai.TaiKhoan;
    } else {
     
      swal.fire('','Vui lòng đăng nhập', "warning")
      return false;
    }
  }

  tongTienVe(tien) {
    this.tienVe = tien;
  }

  tongTienCombo(tien) {
    this.tienCombo = tien;
  }

  tongTienDat(): number {
    return this.tongTien = this.tienVe + this.tienCombo;
  }

  layThongTinVe() {
    const ve = {
      MaLichChieu: this.MaLichChieu,
      TaiKhoanNguoiDung: this.LayTaiKhoanNguoiDung(),
      DanhSachVe: this.dsGhe.DanhSachGheDangDat,
    };
    if (ve.DanhSachVe.length !== 0) {
      this.veService.DatVe(ve).subscribe(
        (result) => {
          console.log(result);
          this.router.navigate(['/home']);
        },
        (err) => {
          console.log(err);
        }
      );
    } else {
      
    
      swal.fire('','Bạn Chưa chọn ghế', "warning")
    }
  }
  ngOnInit() {
    this.demNguoc();
    this.route.params
      .subscribe((result) => {
        this.MaLichChieu = result.maLichChieu;
        this.veService.LayChiTietPhongVe(this.MaLichChieu).subscribe(
          (res) => {
            this.DanhSachGhe = res.DanhSachGhe;
            console.log(res.DanhSachGhe);
          }
        );
      },
        (error) => { console.log(error); });
    const phim: Phim = JSON.parse(localStorage.getItem('ChiTietPhim'));
    console.log(typeof phim);
  }
}
