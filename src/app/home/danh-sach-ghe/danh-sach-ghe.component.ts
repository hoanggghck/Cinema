import { Component, OnInit, Input, OnChanges, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { Phim } from 'src/app/share/model/Phim';

@Component({
  selector: 'app-danh-sach-ghe',
  templateUrl: './danh-sach-ghe.component.html',
  styleUrls: ['./danh-sach-ghe.component.scss']
})
export class DanhSachGheComponent implements OnInit, OnChanges {
  @Input() mangGhe: any[] = [];
  @Output() emitTongTienVe = new EventEmitter();
  Tong: number;
  soGheDaChon = 0;
  soGheConTrong: number;
  DanhSachGheDangDat = [];
  DanhSachGheDangDat2 = [];
  show() {
    let Tien = 0;
    // tslint:disable-next-line:forin
    for (const index in this.DanhSachGheDangDat) {
      Tien += this.DanhSachGheDangDat[index].GiaVe;
    }
    this.Tong = Tien;
    this.emitTongTienVe.emit(this.Tong);
  }

  datGheParent(status, ghe) {
    const ve: { MaGhe: number, GiaVe: number } = {
      MaGhe: ghe.MaGhe,
      GiaVe: ghe.GiaVe
    };
    if (status) {
      this.soGheDaChon++;
      this.soGheConTrong--;
      this.DanhSachGheDangDat.push(ve);
      this.DanhSachGheDangDat2.push(ghe);

    } else {
      this.soGheDaChon--;
      this.soGheConTrong++;
      for (const index in this.DanhSachGheDangDat) {

        if (this.DanhSachGheDangDat[index].MaGhe === ghe.MaGhe) {
          this.DanhSachGheDangDat.splice(parseInt(index, 10), 1);

        }
      }
      for (const index in this.DanhSachGheDangDat2) {
        if (this.DanhSachGheDangDat2[index].MaGhe === ghe.MaGhe) {
          this.DanhSachGheDangDat2.splice(parseInt(index, 10), 1);
        }
      }
    }


  }
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges) {
    this.soGheConTrong = this.mangGhe.length;
    for (const ghe of this.mangGhe) {
      if (ghe.DaDat) {
        this.soGheConTrong--;
      }
    }
  }
}
