import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ghe',
  templateUrl: './ghe.component.html',
  styleUrls: ['./ghe.component.scss']
})
export class GheComponent implements OnInit {
  gheStatus = true;
  status = false;
  @Output() emitStatus = new EventEmitter();
  @Input() ghe;
  constructor() { }

  datGhe() {
    if (this.status) {
      this.status = false;
    } else {
      this.status = true;
    }
    this.emitStatus.emit(this.status);
  }
  ngOnInit() {
    this.gheStatus = this.ghe.DaDat;

  }

}
