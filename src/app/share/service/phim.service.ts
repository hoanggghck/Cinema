import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Phim } from '../model/Phim';


@Injectable({
  providedIn: 'root'
})
export class PhimService {

  constructor(private http: HttpClient) { }

  public LayDanhSachPhim(): Observable<Phim[]> {
    const url = 'http://svcy2.myclass.vn/api/QuanLyPhim/LayDanhSachPhim?MaNhom=GP09';
    return this.http.get<Phim[]>(url);
  }

  public LayChiTietPhim(maPhim: number): Observable<Phim> {
    const url = `http://svcy2.myclass.vn/api/QuanLyPhim/LayChiTietPhim?MaPhim=${maPhim}`;
    return this.http.get<Phim>(url);
  }

  public ThemPhim(phim: Phim): Observable<Phim> {
    const url = 'http://svcy2.myclass.vn/api/QuanLyPhim/ThemPhimMoi';
    return this.http.post<Phim>(url, phim,
      {
        headers: { 'Content-Type': 'application/json;charset=UTF-8' }
      });
  }
  public uploadFile(file: File, TenPhim: string) {
    const url = 'http://svcy2.myclass.vn/api/QuanLyPhim/UploadFile';
    const formData = new FormData();
    formData.append('Files', file);
    formData.append('TenPhim', TenPhim);
    return this.http.post(url, formData);
  }

  public XoaPhim(maPhim: number): Observable<{}> {
    const url = `http://svcy2.myclass.vn/api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`;
    return this.http.delete(url);
  }

  public CapNhatPhim(phim: Phim): Observable<Phim> {
    const url = 'http://svcy2.myclass.vn/api/QuanLyPhim/CapNhatPhim';
    return this.http.post<Phim>(url, phim,
      {
        headers: { 'Content-Type': 'application/json;charset=UTF-8' }
      });
  }

  public LayChiTietPhongVe(MaLichChieu: any): Observable<any> {
    const url = `http://svcy2.myclass.vn/api/QuanLyPhim/ChiTietPhongVe?MaLichChieu=${MaLichChieu}`;
    return this.http.get(url);
  }
}
