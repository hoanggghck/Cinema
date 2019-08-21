import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { $ } from 'jquery';
declare var $: any;
@Component({
  selector: 'app-item-combo',
  templateUrl: './item-combo.component.html',
  styleUrls: ['./item-combo.component.scss']
})
export class ItemComboComponent implements OnInit {
  @Input() combo;
  @Output() emitComboIns = new EventEmitter();
  @Output() emitComboDes = new EventEmitter();
  soLuong = 0;
  gia = 0;
  tongGia = 0;
  name = '#';
  Showdetail(name) {
    const id = '#' + this.setIDButton(name);
    $(id).attr('data-target', '#' + name);
    console.log($(id).attr('data-target'));
  }

  setID(name): string {
    return name;
  }

  setIDButton(name): string {
    return name + 'button';
  }

  addComBo() {
    return this.emitComboIns.emit(this.combo);
  }
  desComBo() {
    return this.emitComboDes.emit(this.combo);
  }


  constructor() { }

  ngOnInit() {
  }

}
