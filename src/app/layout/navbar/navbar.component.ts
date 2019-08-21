import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { NguoiDungService } from 'src/app/share/service/nguoi-dung.service';

import { $ } from 'jquery';
import { NguoiDung } from 'src/app/share/model/nguoi-dung';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @ViewChild('formDN') formDN: NgForm;
  @Output() selectEmit = new EventEmitter();
  @Output() emitStatus = new EventEmitter();
  constructor(private nguoiDungService: NguoiDungService, private router: Router) { }
  status = true;
  userName = '';
  MaLoaiNguoiDung = 'KhachHang';
  MaNhom = 'GP09';
  MangNhom = [];
  ModalTitile = 'Đăng nhập';
  isShowFormDN = true;
  isShowFormDK = false;
  isShowDN: boolean;
  isShowDX: boolean;
  emitStatusChild() {
    this.emitStatus.emit(this.status);
  }
  select(value) {
    if (value === 'LichChieu') {
      this.selectEmit.emit('LichChieu');
    } else if (value === 'TinTuc') {
      this.selectEmit.emit('TinTuc');
    } else if (value === 'UngDung') {
      this.selectEmit.emit('UngDung');
    }
  }
  handleSignin(nguoiDung: any) {
    this.nguoiDungService.DangNhap(nguoiDung).subscribe(
      (res) => {
        if (typeof res !== 'string') {
          localStorage.setItem('loginUser', JSON.stringify(res));
          // alert('success');
          this.isShowDN = false;
          this.isShowDX = true;
          let user: any;
          user = JSON.parse(localStorage.getItem('loginUser'));
          this.userName = user.HoTen;
          if (user.MaLoaiNguoiDung === 'QuanTri') {
            this.router.navigate(['/admin']);
          }
          $('#modelDangNhap').modal('hide');
          this.formDN.resetForm();
        } else {
          this.isShowDX = false;
          this.isShowDN = true;
          alert(res);
        }
      },
      (error) => { console.log(error); }
    );
  }

  handleSignup(nguoiDung: NguoiDung) {
    this.nguoiDungService.DangKy(nguoiDung)
      .subscribe(
        (res) => {
          console.log(res);
          $('#modelDangNhap').modal('hide');
        },
        (err) => {
          console.log(err);
        }
      );
  }

  showFormDN() {
    this.ModalTitile = 'Đăng nhập';
    this.isShowFormDN = true;
    this.isShowFormDK = false;
  }
  showFormDK() {
    this.ModalTitile = 'Đăng ký';
    this.isShowFormDK = true;
    this.isShowFormDN = false;
  }
  signOut() {
    localStorage.removeItem('loginUser');
    this.isShowDX = false;
    this.isShowDN = true;
  }
  ngOnInit() {
    if (localStorage.getItem('loginUser')) {
      this.isShowDX = true;
      this.isShowDN = false;
      this.userName = JSON.parse(localStorage.getItem('loginUser')).HoTen;
    } else {
      this.isShowDN = true;
      this.isShowDX = false;
    }
    this.MangNhom = ['GP01', 'GP02', 'GP03', 'GP04', 'GP05', 'GP06', 'GP07', 'GP08', 'GP09'];
  }
}
