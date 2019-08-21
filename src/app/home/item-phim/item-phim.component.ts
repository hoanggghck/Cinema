import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Phim } from 'src/app/share/model/Phim';

@Component({
  selector: 'app-item-phim',
  templateUrl: './item-phim.component.html',
  styleUrls: ['./item-phim.component.scss']
})
export class ItemPhimComponent implements OnInit {
  @Input() Itemphim: Phim;
  @Output() evtTrailer = new EventEmitter();
  isShowButton = false;
  isShowName = true;
  TrailerPhim: any;
  showButton(): boolean {
    if (typeof this.Itemphim.MaPhim === 'number') {
      return this.isShowButton = true;
    }
    return this.isShowButton = false;
  }
  showName(): boolean {
    if (this.isShowButton === false) {
      this.showButton();
    }
    if (this.isShowButton === true) {
      return this.isShowName = false;
    }
    return this.isShowName = true;
  }
  hideButton(): boolean {
    this.isShowButton = false;
    return this.isShowName = true;
  }
  emitTrailer() {
    let trailer: any = this.Itemphim.Trailer;
    trailer = trailer.split('watch?v=');
    this.TrailerPhim = trailer[0] + 'embed/' + trailer[1];
    this.evtTrailer.emit(this.TrailerPhim);
  }

  constructor() { }

  ngOnInit() {

  }

}
