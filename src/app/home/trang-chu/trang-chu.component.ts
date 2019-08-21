import { Component, OnInit, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-trang-chu',
  templateUrl: './trang-chu.component.html',
  styleUrls: ['./trang-chu.component.scss']
})
export class TrangChuComponent implements OnInit, AfterViewInit {
  scrollToElement(id): void {
    const element = document.getElementById(id);
    console.log(element);
    element.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
  }

  constructor() { }

  ngOnInit() {
    if (localStorage.getItem('Id')) {
      // this.scrollToElement(JSON.parse(localStorage.getItem('Id')));
      setTimeout(() => {
        const element = document.getElementById(JSON.parse(localStorage.getItem('Id')));
        console.log(element);
        element.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
        localStorage.removeItem('Id');
      }, 500);

    }
  }
  ngAfterViewInit() {

  }

}
