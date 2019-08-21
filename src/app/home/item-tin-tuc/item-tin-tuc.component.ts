import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-tin-tuc',
  templateUrl: './item-tin-tuc.component.html',
  styleUrls: ['./item-tin-tuc.component.scss']
})
export class ItemTinTucComponent implements OnInit {
  @Input() TinTuc;
  constructor() { }

  ngOnInit() {
  }

}
