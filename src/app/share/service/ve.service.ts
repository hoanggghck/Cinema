import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NguoiDung } from '../model/nguoi-dung';

@Injectable({
  providedIn: 'root'
})
export class VeService {

  constructor(private http: HttpClient) { }

  public DatVe(ve: any): Observable<any> {
    const url = 'http://svcy2.myclass.vn/api/QuanLyDatVe/DatVe';
    return this.http.post(url, ve,
      {
        headers: { 'Content-Type': 'application/json;charset=UTF-8' }
      });
  }

  public LichSuDatVe(nguoiDung: NguoiDung): Observable<any> {
    const url = `http://svcy2.myclass.vn/api/QuanLyDatVe/XemLichSuDatVe?${nguoiDung.TaiKhoan}`;
    return this.http.post(url, nguoiDung,
      {
        headers: { 'Content-Type': 'application/json;charset=UTF-8' }
      });
  }

  public LayChiTietPhongVe(MaLichChieu: any): Observable<any> {
    const url = `http://svcy2.myclass.vn/api/QuanLyPhim/ChiTietPhongVe?MaLichChieu=${MaLichChieu}`;
    return this.http.get(url);
  }

}
