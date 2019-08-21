import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NguoiDung } from '../model/nguoi-dung';

@Injectable({
  providedIn: 'root'
})
export class NguoiDungService {

  constructor(private http: HttpClient) { }

  public DangKy(nguoiDung: NguoiDung): Observable<NguoiDung> {
    const url = 'http://svcy2.myclass.vn/api/QuanLyNguoiDung/ThemNguoiDung';
    return this.http.post<NguoiDung>(url, nguoiDung, {
      headers: { 'Content-Type': 'application/json;charset=UTF-8' }
    });
  }
  public DangNhap(nguoiDung: any): Observable<any> {
    const url = `http://svcy2.myclass.vn/api/QuanLyNguoiDung/DangNhap?taikhoan=${nguoiDung.TaiKhoan}&matkhau=${nguoiDung.MatKhau}`;
    return this.http.post(url, nguoiDung, {
      headers: { 'Content-Type': 'application/json;charset=UTF-8' }
    });
  }

  public LayDanhSachNguoiDung(): Observable<NguoiDung[]> {
    const url = 'http://svcy2.myclass.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP09';
    return this.http.get<NguoiDung[]>(url);
  }

  public CapNhatNguoiDung(nguoiDung: NguoiDung): Observable<NguoiDung> {
    const url = 'http://svcy2.myclass.vn/api/QuanLyNguoiDung/CapNhatThongTin';
    return this.http.post<NguoiDung>(url, nguoiDung, {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      }
    });
  }

  public XoaNguoiDung(nguoiDung: NguoiDung): Observable<{}> {
    const url = `http://svcy2.myclass.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${nguoiDung.TaiKhoan}`;
    return this.http.delete(url);
  }

  public LayDanhSachLoaiNguoiDung(): Observable<any> {
    const url = 'http://svcy2.myclass.vn/api/QuanLyNguoiDung/LayDanhSachLoaiNguoiDung';
    return this.http.get(url);
  }

}
