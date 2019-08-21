import { Component, OnInit, AfterViewInit } from '@angular/core';
import { $ } from 'jquery';
declare var $: any;
@Component({
  selector: 'app-phim-sap-chieu',
  templateUrl: './phim-sap-chieu.component.html',
  styleUrls: ['./phim-sap-chieu.component.scss']
})
export class PhimSapChieuComponent implements OnInit, AfterViewInit {

  DanhSachPhimSapChieu = [
    { TenPhim: "Thor: Ragnarok", HinhAnh: '../../../assets/img/thor-ragnarok-15088151416399.jpg', Trailer: "https://www.youtube.com/watch?v=S3AVcCggRnU" },
    { TenPhim: "Ferdinand", HinhAnh: '../../../assets/img/pokemon-to-chon-cau-pokemon-i-choose-you-15095249219579.jpg', Trailer: "https://www.youtube.com/watch?v=S3AVcCggRnU" },
    { TenPhim: "Trùm Hương Cảng", HinhAnh: '../../../assets/img/trum-huong-cang-chasing-the-dragon-15088270130890.jpg', Trailer: "https://www.youtube.com/watch?v=S3AVcCggRnU" },
    { TenPhim: "Ferdinand", HinhAnh: '../../../assets/img/ferdinand.jpg', Trailer: "https://www.youtube.com/watch?v=S3AVcCggRnU" },
    { TenPhim: "Trải nghiệm điểm chết", HinhAnh: '../../../assets/img/trai-nghiem-diem-chet-flatliners-15093522963475.jpg', Trailer: "https://www.youtube.com/watch?v=S3AVcCggRnU" },
  ];

  contentModal = '';
  showContent(trailer: string) {
    this.contentModal = trailer;
  }
  close() {
    $('.iframe-youtube').each(function() {
      $(this).attr('src', $(this).attr('src'));
    });
  }
  constructor() { }
  ngOnInit() {

  }
  ngAfterViewInit() {
    $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      responsive: {
        600: {
          items: 1
        },
        800:{
          items:2
        },
        1000: {
          items: 4
        }
      }
    })
  }


}
