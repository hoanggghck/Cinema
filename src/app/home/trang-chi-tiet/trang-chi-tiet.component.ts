import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-trang-chi-tiet',
  templateUrl: './trang-chi-tiet.component.html',
  styleUrls: ['./trang-chi-tiet.component.scss']
})
export class TrangChiTietComponent implements OnInit {
  constructor(private router: Router) { }
  goHome(check) {
    if (check) {
      this.router.navigate(['/home']);
    }
  }
  getId(id) {
    console.log(id);
    localStorage.setItem('Id', JSON.stringify(id));
  }
  ngOnInit() {
  }

}
