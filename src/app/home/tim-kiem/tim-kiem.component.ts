import { Component, OnInit } from '@angular/core';
import { Phim } from 'src/app/share/model/Phim';
import { ActivatedRoute } from '@angular/router';
import { PhimService } from 'src/app/share/service/phim.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-tim-kiem',
  templateUrl: './tim-kiem.component.html',
  styleUrls: ['./tim-kiem.component.scss']
})
export class TimKiemComponent implements OnInit {
 
  

  DanhSachPhimDangChieu: Phim[] = [];
  searchStatus = false;
  searchStatus2 = false;
  titlefilmStatus = true;
  datestatus = true;
  idfilm: number;
  film: Phim;
  ItemPhim: Phim;
  titlefilm = '';
  datefilm = '';
  idlich = 0;
  

  constructor(private phim: PhimService, private chiTietPhim: PhimService, private route: ActivatedRoute) { }

  onClickSearchMenuBar() {
    this.searchStatus = !this.searchStatus;
  }
  
  LayThongTinPhim(id) {
    this.chiTietPhim.LayChiTietPhim(id)
      .subscribe((result: Phim) => {
        localStorage.setItem('ChiTietPhim', JSON.stringify(result));
        this.film = result;
        if (this.titlefilm !== '') {
          this.searchStatus2 = !this.searchStatus2;
        }
        console.log(result);
      },
        (error) => { console.log(error); });
  }

  LayDate(date) {
    this.datefilm = date;
    this.searchStatus2 = !this.searchStatus2;
    if (this.datefilm !== '') {
      this.datestatus = false;
    }

  }
  LayMaLichChieu(idlc) {
    this.idlich = idlc;
  }
  onClicktitlefilm(ItemPhim: Phim) {
    this.titlefilm = ItemPhim.TenPhim;
    this.idfilm = ItemPhim.MaPhim;
    
    this.searchStatus = !this.searchStatus;
    if (this.titlefilm !== '') {
      this.titlefilmStatus = false;
    }
  }

  loiNhap(){
     if(this.titlefilm == '')
    
    swal.fire('','Vui Lòng Chọn Tên Phim','error'
    );
  }
  ngOnInit() {
    this.phim.LayDanhSachPhim().subscribe(
      result => {
        this.DanhSachPhimDangChieu = result;

      },
      error => { console.log(error); },
    );
    this.route.params
      .subscribe((result) => { this.LayThongTinPhim(result.maPhim); },
        (error) => { console.log(error); });

  }

}
