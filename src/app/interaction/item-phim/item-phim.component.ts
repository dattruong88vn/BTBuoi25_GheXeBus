import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { moveEmbeddedView } from '@angular/core/src/view';
//Input: để nhận dữ liệu từ cha
//Output: gồm output và EventEmitter

@Component({
  selector: 'app-item-phim',
  templateUrl: './item-phim.component.html',
  styleUrls: ['./item-phim.component.scss']
})
export class ItemPhimComponent implements OnInit {
  
  @Input() movie; //input [movie]='item' từ thằng cha
  @Output() eventLike = new EventEmitter();  //khởi tạo đối tượng eventLike để output ra ngoài, thuộc lớp EventEmitter
  
  constructor() { }

  ngOnInit() {
  }

  /*
    hàm like  
    khi bấm like sẽ đẩy bộ phim được bấm like ra ngoài
   */
  like() {
    this.eventLike.emit(this.movie);
  }

}
