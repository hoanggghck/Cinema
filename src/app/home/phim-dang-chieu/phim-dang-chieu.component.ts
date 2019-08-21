import { Component, OnInit } from '@angular/core';
import { $ } from 'jquery';

import { Phim } from 'src/app/share/model/Phim';
import { PhimService } from 'src/app/share/service/phim.service';

declare var $: any;

@Component({
  selector: 'app-phim-dang-chieu',
  templateUrl: './phim-dang-chieu.component.html',
  styleUrls: ['./phim-dang-chieu.component.scss']
})
export class PhimDangChieuComponent implements OnInit {
  DanhSachPhimDangChieu: Phim[] = [];

  constructor(private phim: PhimService) { }

  contentModal = '';
  showContent(trailer: string) {
    this.contentModal = trailer;
  }
  close() {
    $('.iframe-youtube').each(function() {
      $(this).attr('src', $(this).attr('src'));
    });
  }

  ngOnInit() {
    this.phim.LayDanhSachPhim().subscribe(
      result => {
        this.DanhSachPhimDangChieu = result;
        setTimeout(() => {
          $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            responsive: {
              
              480: {
                items: 1
              },
              800:{
                items:2
              },
              1000: {
                items: 4
              }
            }
          });
        }, 1);
        console.log(result);
      },
      error => { console.log(error); },
    );
  }


}
