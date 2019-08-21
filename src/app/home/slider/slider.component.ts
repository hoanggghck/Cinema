import { Component, OnInit } from '@angular/core';
import { $ } from 'jquery';
declare var $: any;

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  DanhSachPhim = [
    { HinhAnh: '../../../assets/img/bgr-1.jpg', Trailer: 'https://www.youtube.com/watch?v=TcMBFSGVi1c' },
    { HinhAnh: '../../../assets/img/bgr-2.jpg', Trailer: 'https://www.youtube.com/watch?v=_4TN9hooiyQ' },
    { HinhAnh: '../../../assets/img/bgr-3.jpg', Trailer: 'https://www.youtube.com/watch?v=pU8-7BX9uxs' },
    { HinhAnh: '../../../assets/img/bgr-4.jpg', Trailer: 'https://www.youtube.com/watch?v=4iSmIsXVlmM' },
  ];
  trailerName = '';
  trailer(trailerUrl): string {
    const trailerCut = trailerUrl.split('watch?v=');
    console.log(trailerCut[0] + 'embed/' + trailerCut[1]);
    return this.trailerName = trailerCut[0] + 'embed/' + trailerCut[1];
  }

  close() {
    $('.iframe-youtube').each(function () {
      $(this).attr('src', $(this).attr('src'));
    });
  }
  constructor() { }

  ngOnInit() {
  }

}
