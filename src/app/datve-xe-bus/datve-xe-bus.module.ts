import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatveXeBusComponent } from './datve-xe-bus.component';
import { DanhSachGheBusComponent } from './danh-sach-ghe-bus/danh-sach-ghe-bus.component';
import { GheBusComponent } from './ghe-bus/ghe-bus.component';

@NgModule({
  declarations: [DatveXeBusComponent, DanhSachGheBusComponent, GheBusComponent],
  exports:[DatveXeBusComponent, DanhSachGheBusComponent, GheBusComponent],
  imports: [
    CommonModule
  ]
})
export class DatveXeBusModule { }
