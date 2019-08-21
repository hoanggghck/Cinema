import { Component, OnInit,AfterViewInit } from '@angular/core';
import { Phim } from 'src/app/share/model/Phim';
import { PhimService } from 'src/app/share/service/phim.service';
@Component({
  selector: 'app-lich-chieu',
  templateUrl: './lich-chieu.component.html',
  styleUrls: ['./lich-chieu.component.scss']
})
export class LichChieuComponent implements OnInit {
  DanhSachPhimDangChieu: Phim[] = [];
  constructor(private phim: PhimService) { }

  ngOnInit() {
    this.phim.LayDanhSachPhim().subscribe(
      result => {
        this.DanhSachPhimDangChieu = result;
        console.log(result);
      },
      error => { console.log(error); },
    );
  }

}
