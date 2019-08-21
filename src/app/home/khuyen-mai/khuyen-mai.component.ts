import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-khuyen-mai',
  templateUrl: './khuyen-mai.component.html',
  styleUrls: ['./khuyen-mai.component.scss']
})
export class KhuyenMaiComponent implements OnInit {

  DanhSachKhuyenMai = [
    {TieuDeTinTuc:"Mua 2 Vé Cinestar Qua ZaloPay Chỉ 1.000đ/vé",HinhAnh:'../../../assets/img/khuyen-mai-1.jpg'},
    {TieuDeTinTuc:"Mua Vé BHD Star Trên 123Phim Bằng ZaloPay: 1.000đ/vé",HinhAnh:'../../../assets/img/khuyen-mai-2.jpg'},
    {TieuDeTinTuc:"[Galaxy Tràng Thi] Xem Phim Hay, Say Quà Tặng",HinhAnh:'../../../assets/img/khuyen-mai-3.jpg'}, 
  ]

  constructor() { }

  ngOnInit() {
  }

}
