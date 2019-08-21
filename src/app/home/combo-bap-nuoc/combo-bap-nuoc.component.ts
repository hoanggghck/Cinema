import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-combo-bap-nuoc',
  templateUrl: './combo-bap-nuoc.component.html',
  styleUrls: ['./combo-bap-nuoc.component.scss']
})
export class ComboBapNuocComponent implements OnInit {
  @Output() emitTongTienCombo = new EventEmitter();
  Tong: number;
  DanhSachDat = [];
  DanhSachCombo = [
    // tslint:disable-next-line:max-line-length
    {
      id: 'a',
      tittle: 'Combo1',
      image: '../../../assets/img/combobap.jpg',
      details: '1 BẮP (NGỌT/MẶN) + 1 NƯỚC (PEPSI/7UP/MIRINDA CAM/MIRINDA SARSI)',
      price: 65000,
      quantity: 0
    },
    // tslint:disable-next-line:max-line-length
    {
      id: 'b',
      tittle: 'Combo2',
      image: '../../../assets/img/combobap.jpg',
      details: '1 BẮP (NGỌT/MẶN) + 2 NƯỚC (PEPSI/7UP/MIRINDA CAM/MIRINDA SARSI)',
      price: 81000,
      quantity: 0
    },
    // tslint:disable-next-line:max-line-length
    {
      id: 'c',
      tittle: 'iShopkins Combo 1',
      image: '../../../assets/img/combobap.jpg',
      details: '1 BẮP (NGỌT/MẶN) + 1 (PEPSI/7UP/MIRINDA CAM/MIRINDA SARSI)',
      price: 124000,
      quantity: 0
    },
    // tslint:disable-next-line:max-line-length
    {
      id: 'd',
      tittle: 'iXMen Dark Phoenix',
      image: '../../../assets/img/combobap.jpg',
      details: '1 BẮP (NGỌT/MẶN) + 1 (PEPSI/7UP/MIRINDA CAM/MIRINDA SARSI)',
      price: 134000,
      quantity: 0
    },
    // tslint:disable-next-line:max-line-length
    {
      id: 'e',
      tittle: 'XMen Dark Phoenix  1 ',
      image: '../../../assets/img/combobap.jpg',
      details: '1 BẮP (NGỌT/MẶN) + 1 (PEPSI/7UP/MIRINDA CAM/MIRINDA SARSI) + 1 TRONG CÁC LOẠI BÁNH: TWISTER, KITKAT, COSY, POCKY, ĐẬU WASABI, GAP, SNACK OISHI, STRIP FRIES',
      price: 150000,
      quantity: 0
    },
    // tslint:disable-next-line:max-line-length
    {
      id: 'f',
      tittle: 'i-Family 2 Voucher',
      image: '../../../assets/img/combobap.jpg',
      details: '1 BẮP (NGỌT/MẶN) + 2 NƯỚC (PEPSI/7UP/MIRINDA CAM/MIRINDA SARSI)',
      price: 165000,
      quantity: 0
    },
  ];

  addToCart(product: any): any {
    product.quantity++;
    const index = this.DanhSachDat.findIndex(item => item.id === product.id);
    if (index === -1) {
      const cartItem = { ...product };
      cartItem.quantity = 1;
      this.DanhSachDat.push(cartItem);
      this.totalPrice();
    } else {
      this.DanhSachDat[index].quantity++;
      console.log(this.DanhSachDat);
      this.totalPrice();
    }
  }
  desToCart(product: any) {
    const index = this.DanhSachDat.findIndex(item => item.id === product.id);
    if (index !== -1) {
      const i = this.DanhSachCombo.findIndex(item => item.id === product.id);
      this.DanhSachDat[index].quantity--;
      if (this.DanhSachCombo[i].quantity >= 0) {
        this.DanhSachCombo[i].quantity--;
      }
      if (this.DanhSachDat[index].quantity === 0) {
        this.DanhSachDat.splice(index, 1);
      }
    }
    console.log(this.DanhSachDat);
    this.totalPrice();
  }

  totalPrice() {
    let Sum = 0;
    for (const item of this.DanhSachDat) {
      Sum += item.quantity * item.price;
    }
    this.Tong = Sum;
    this.emitTongTienCombo.emit(this.Tong);
  }

  constructor() { }

  ngOnInit() {
  }

}
