import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { NgForm } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { NguoiDungService } from 'src/app/share/service/nguoi-dung.service';
import { NguoiDung } from 'src/app/share/model/nguoi-dung';
import { $ } from 'jquery';
declare var $: any;

@Component({
    selector: 'app-quan-ly-nguoi-dung',
    templateUrl: './quan-ly-nguoi-dung.component.html',
    styleUrls: ['./quan-ly-nguoi-dung.component.scss']
})
export class QuanLyNguoiDungComponent implements OnInit {
    @ViewChild('FormEdit') FormEdit: NgForm;
    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild('signupForm') signupForm: NgForm;

    danhSachNguoiDung = new MatTableDataSource();
    MaLoaiNguoiDung = 'KhachHang';
    MaNhom = 'GP09';
    MangNhom = [];

    constructor(private nguoiDungService: NguoiDungService) { }
    displayedColumns: string[] = ['TaiKhoan', 'MatKhau', 'HoTen', 'Email', 'SoDT', 'MaNhom', 'MaLoaiNguoiDung', 'Action'];

    XoaNguoiDung(nguoiDung: NguoiDung) {
        this.nguoiDungService.XoaNguoiDung(nguoiDung).subscribe(
            (res) => {
                console.log(res);
                this.nguoiDungService.LayDanhSachNguoiDung().subscribe(
                    (result) => {
                        this.danhSachNguoiDung.data = result;
                        console.log(this.danhSachNguoiDung);
                    }, (error) => { console.log(error); }
                );
            },
            (err) => { console.log(err); }
        );
    }

    handleSignup(nguoiDung: NguoiDung) {
        this.nguoiDungService.DangKy(nguoiDung)
            .subscribe(
                (res) => {
                    console.log(res);
                    this.nguoiDungService.LayDanhSachNguoiDung().subscribe(
                        (result) => {
                            this.danhSachNguoiDung.data = result;
                            console.log(this.danhSachNguoiDung);
                        }, (error) => { console.log(error); }
                    );
                    this.signupForm.reset({
                        MaNhom: 'GP09',
                        MaLoaiNguoiDung: 'KhachHang'
                    });
                    $('#modalId').modal('hide');
                },
                (err) => {
                    console.log(err);
                }
            );
    }

    setUser(nguoiDung: NguoiDung): void {
        const nguoiDungEdit = {
            TaiKhoan: nguoiDung.TaiKhoan,
            MatKhau: nguoiDung.MatKhau,
            HoTen: nguoiDung.HoTen,
            Email: nguoiDung.Email,
            SoDT: nguoiDung.SoDT,
            MaNhom: 'GP09',
            MaLoaiNguoiDung: nguoiDung.MaLoaiNguoiDung,
        };
        this.FormEdit.setValue(nguoiDungEdit);
    }

    handleEdit(nguoiDung: NguoiDung) {
        this.nguoiDungService.CapNhatNguoiDung(nguoiDung).subscribe(
            (res) => {
                console.log(res); this.nguoiDungService.LayDanhSachNguoiDung().subscribe(
                    (result) => {
                        this.danhSachNguoiDung.data = result;
                        console.log(this.danhSachNguoiDung);
                        $('#modalEdit').modal('hide');
                    }, (error) => { console.log(error); }
                );
            },
            (err) => { console.log(err); }
        );
    }
    ngOnInit() {
        this.MangNhom = ['GP01', 'GP02', 'GP03', 'GP04', 'GP05', 'GP06', 'GP07', 'GP08', 'GP09'];
        this.nguoiDungService.LayDanhSachNguoiDung().subscribe(
            (result) => {
                this.danhSachNguoiDung.data = result;
                console.log(this.danhSachNguoiDung);
            }, (error) => { console.log(error); }
        );
        this.danhSachNguoiDung.sort = this.sort;
        this.danhSachNguoiDung.paginator = this.paginator;
    }

    applyFilter(filterValue: string) {
        this.danhSachNguoiDung.filter = filterValue.trim().toLowerCase();
    }

}
