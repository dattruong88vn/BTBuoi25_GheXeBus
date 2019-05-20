import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { GheBusComponent } from '../ghe-bus/ghe-bus.component';

@Component({
  selector: 'app-danh-sach-ghe-bus',
  templateUrl: './danh-sach-ghe-bus.component.html',
  styleUrls: ['./danh-sach-ghe-bus.component.scss']
})
export class DanhSachGheBusComponent implements OnInit {

  //ViewChildren: tạo ra một mảng, mỗi item của mảng là Một Ghế với đầy đủ thuộc tính và phương thức
  //Mục đích là để thao tác trực tiếp các thuộc tính của mỗi ghế ngay từ Class Danh Sách ghế

  @ViewChildren (GheBusComponent) GheBusComp: QueryList<GheBusComponent>;

  mangGhe = [
    { SoGhe: 1, TenGhe: "số 1", Gia: 100, TrangThai: false },
    { SoGhe: 2, TenGhe: "số 2", Gia: 100, TrangThai: false },
    { SoGhe: 3, TenGhe: "số 3", Gia: 100, TrangThai: false },
    { SoGhe: 4, TenGhe: "số 4", Gia: 100, TrangThai: false },
    { SoGhe: 5, TenGhe: "số 5", Gia: 100, TrangThai: false },
    { SoGhe: 6, TenGhe: "số 6", Gia: 100, TrangThai: false },
    { SoGhe: 7, TenGhe: "số 7", Gia: 100, TrangThai: false },
    { SoGhe: 8, TenGhe: "số 7", Gia: 100, TrangThai: false },
    { SoGhe: 9, TenGhe: "số 9", Gia: 100, TrangThai: false },
    { SoGhe: 10, TenGhe: "số 10", Gia: 100, TrangThai: false },
    { SoGhe: 11, TenGhe: "số 11", Gia: 100, TrangThai: false },
    { SoGhe: 12, TenGhe: "số 12", Gia: 100, TrangThai: false },
    { SoGhe: 13, TenGhe: "số 13", Gia: 100, TrangThai: false },
    { SoGhe: 14, TenGhe: "số 14", Gia: 100, TrangThai: false },
    { SoGhe: 15, TenGhe: "số 15", Gia: 100, TrangThai: false },
    { SoGhe: 16, TenGhe: "số 16", Gia: 100, TrangThai: false },
    { SoGhe: 17, TenGhe: "số 17", Gia: 100, TrangThai: false },
    { SoGhe: 18, TenGhe: "số 18", Gia: 100, TrangThai: false },
    { SoGhe: 19, TenGhe: "số 19", Gia: 100, TrangThai: false },
    { SoGhe: 20, TenGhe: "số 20", Gia: 100, TrangThai: false },
    { SoGhe: 21, TenGhe: "số 21", Gia: 100, TrangThai: false },
    { SoGhe: 22, TenGhe: "số 22", Gia: 100, TrangThai: false },
    { SoGhe: 23, TenGhe: "số 23", Gia: 100, TrangThai: false },
    { SoGhe: 24, TenGhe: "số 24", Gia: 100, TrangThai: false },
    { SoGhe: 25, TenGhe: "số 25", Gia: 100, TrangThai: false },
    { SoGhe: 26, TenGhe: "số 26", Gia: 100, TrangThai: false },
    { SoGhe: 27, TenGhe: "số 27", Gia: 100, TrangThai: false },
    { SoGhe: 28, TenGhe: "số 28", Gia: 100, TrangThai: false },
    { SoGhe: 29, TenGhe: "số 29", Gia: 100, TrangThai: false },
    { SoGhe: 30, TenGhe: "số 30", Gia: 100, TrangThai: true },
    { SoGhe: 31, TenGhe: "số 31", Gia: 100, TrangThai: false },
    { SoGhe: 32, TenGhe: "số 32", Gia: 100, TrangThai: false },
    { SoGhe: 33, TenGhe: "số 33", Gia: 100, TrangThai: false },
    { SoGhe: 34, TenGhe: "số 34", Gia: 100, TrangThai: false },
    { SoGhe: 35, TenGhe: "số 35", Gia: 100, TrangThai: false },
  ];

  danhSachGheDaDat = [];

  constructor() { }

  ngOnInit() {
  }

  datGhe(Obj) {
    console.log(Obj);
    //hàm datGhe nhận emit từ component con nên truyền vào một Object
    //duyệt mảng danhSachGheDaDat, tìm vị trí của Object ghế 
    let index = this.danhSachGheDaDat.findIndex(item => item.SoGhe === Obj.ObjGhe.SoGhe);
    //nếu chưa có trả về -1, lúc này sẽ thêm Ghế vào mảng danhSachGheDaDat
    if (index === -1) {
      this.danhSachGheDaDat.push(Obj.ObjGhe);
    }
    //ngược lại xóa vị trí nhân được
    else {
      this.danhSachGheDaDat.splice(index,1);
    }
  }
  
  huyGhe(ghe) {
    //Hàm hủy ghế truyền vào một ghế được chọn
    //tìm vị trí của ghế đó trong mảng danhSachGheDaDat thông qua số ghế
    //xóa từ vị trí đó 1 ghế
    this.danhSachGheDaDat.splice(this.danhSachGheDaDat.findIndex(item => item.SoGhe === ghe.SoGhe),1);

    //tìm trong mảng GheBusComp ghế nào có số ghế giống với ghế được truyền vào từ hàm Hủy
    let gheHuy = this.GheBusComp.find(item => item.ghe.SoGhe === ghe.SoGhe);
    //đổi thuộc tính trangThaiChon của ghế đó.
    gheHuy.trangThaiChon = false;
    
    

  }
  

}
