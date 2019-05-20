import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ghe-bus',
  templateUrl: './ghe-bus.component.html',
  styleUrls: ['./ghe-bus.component.scss']
})
export class GheBusComponent implements OnInit {
  @Input() ghe;
  @Output() eventGhe = new EventEmitter();
  @Output() eventGhe1 = new EventEmitter();

  trangThaiChon: boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

  chonGhe() {
    this.trangThaiChon = !this.trangThaiChon; //hay hơn if else
    // this.eventGhe.emit(this.ghe);
    let Obj = {
      ObjGhe: this.ghe,
      ObjTrangthai: this.trangThaiChon
    }
    this.eventGhe.emit(Obj);
  }

}
