import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhimService } from 'src/app/share/service/phim.service';
import { Phim } from 'src/app/share/model/Phim';

@Component({
  selector: 'app-noi-dung',
  templateUrl: './noi-dung.component.html',
  styleUrls: ['./noi-dung.component.scss']
})
export class NoiDungComponent implements OnInit {
  phim: Phim;
  isShowContent = false;
  scrollToElement(element): void {
    console.log(element);
    element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  }
  constructor(private chiTietPhim: PhimService, private route: ActivatedRoute) { }
  LayThongTinPhim(maPhim) {
    this.chiTietPhim.LayChiTietPhim(maPhim)
      .subscribe((result: Phim) => {
        localStorage.setItem('ChiTietPhim', JSON.stringify(result));
        this.phim = result;
        this.isShowContent = true;
        console.log(result);
      },
        (error) => { console.log(error); });
  }
  ngOnInit() {
    this.route.params
      .subscribe((result) => { this.LayThongTinPhim(result.maPhim); },
        (error) => { console.log(error); });
  }
}
