import { Component, OnInit, ViewChildren, QueryList, } from '@angular/core'; //tự động import ViewChildren và QueryList
import { ItemPhimComponent } from '../item-phim/item-phim.component'; //Import bằng tay component

@Component({
  selector: 'app-danhsach-phim',
  templateUrl: './danhsach-phim.component.html',
  styleUrls: ['./danhsach-phim.component.scss']
})
export class DanhsachPhimComponent implements OnInit {
  @ViewChildren (ItemPhimComponent) listTagItemPhim: QueryList<ItemPhimComponent>;  //import nhiều component, listTagItemPhim là array


  danhSachPhim = [
    {maPhim: 1, tenPhim: "Minions", gia: "85000", hinhAnh:"assets/images/minions.jpg"},
    {maPhim: 2, tenPhim: "Home", gia: "85000", hinhAnh:"assets/images/home.jpg"},
    {maPhim: 3, tenPhim: "Harvie", gia: "85000", hinhAnh:"assets/images/harvie.jpg"},
    {maPhim: 4, tenPhim: "Insideout", gia: "85000", hinhAnh:"assets/images/insideout.jpg"},
  ];

  danhSachLike = [
    {maPhim: 1, tenPhim: "Minions", soLike: 0},
    {maPhim: 2, tenPhim: "Home", soLike: 0},
    {maPhim: 3, tenPhim: "Harvie", soLike: 0},
    {maPhim: 4, tenPhim: "Insideout", soLike: 0},
  ]

  constructor() { }

  ngOnInit() {
  }

  thich(phim) {
    console.log(phim.maPhim);

    // Cách 1
    // this.danhSachLike.map(item => {
    //   if (item.maPhim === phim.maPhim) {
    //     item.soLike += 1;
    //   }
    // });

    // thuộc tính immutable của các method ?????

    //Cách 2
    let movieLiked = this.danhSachLike.find(item => item.maPhim === phim.maPhim);
    
    movieLiked.soLike++; //tại sao tăng like cho biến movieLiked mà giá trị trong mảng được cập nhật
    console.log(this.danhSachLike);
  }

  themPhim(phim) {
    this.danhSachPhim.push(phim);
    console.log(this.danhSachPhim);
  }

  viewChildren() {
    
    this.listTagItemPhim.map(item => { //item đại diện cho component
      if (item.movie.maPhim === 2) {
        item.movie.gia = 100000;
      }
    })
  }

}
