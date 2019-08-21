import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-admin',
  templateUrl: './layout-admin.component.html',
  styleUrls: ['./layout-admin.component.scss']
})
export class LayoutAdminComponent implements OnInit {
  menuStatus:boolean = true;
  menuType:string = "DashBoard"
  constructor() { }
  MenuChoose(val){
    this.menuType = val;
  
  }
  StatusChange(){
    this.menuStatus =!this.menuStatus;
    console.log(this.menuStatus)
  }

  ngOnInit() {
  }

}
