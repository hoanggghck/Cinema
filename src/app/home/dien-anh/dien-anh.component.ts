import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dien-anh',
  templateUrl: './dien-anh.component.html',
  styleUrls: ['./dien-anh.component.scss']
})
export class DienAnhComponent implements OnInit {

  DanhSachDienAnh = [
    {TieuDeTinTuc:"Marvel mua lại DC",HinhAnh:'../../../assets/img/tin-tuc-8.jpg'},
    {TieuDeTinTuc:"Biệt đội 'thú cưng' tổng tấn công màn bạc năm nay gồm có những ai?",HinhAnh:'../../../assets/img/tin-tuc-9.jpg'},
    {TieuDeTinTuc:"Vừa thoát khỏi mê cung",HinhAnh:'../../../assets/img/tin-tuc-10.jpg'}, 
  ]

  constructor() { }

  ngOnInit() {
  }

}
