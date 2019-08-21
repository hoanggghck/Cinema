import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {

  DanhSachReview = [
    {TieuDeTinTuc:"Avengers: Endgame - Cái kết toàn vẹn cho chặng đường 11 năm của MCU",HinhAnh:'../../../assets/img/review-1.jpg'},
    {TieuDeTinTuc:"[Review] Captain Marvel - Cô gái có đôi tay vàng của làng siêu anh hùng",HinhAnh:'../../../assets/img/review-2.jpg'},
    {TieuDeTinTuc:"[Review] Hai Phượng: Phim hành động Việt máu lửa nhất kể từ Dòng Máu Anh Hùng",HinhAnh:'../../../assets/img/review-3.jpg'}, 
  ]

  constructor() { }

  ngOnInit() {
  }

}
