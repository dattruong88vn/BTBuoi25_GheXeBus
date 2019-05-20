import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InteractionComponent } from './interaction.component';
import { DanhsachPhimComponent } from './danhsach-phim/danhsach-phim.component';
import { ItemPhimComponent } from './item-phim/item-phim.component';

@NgModule({
  declarations: [InteractionComponent, DanhsachPhimComponent, ItemPhimComponent],
  exports: [InteractionComponent, DanhsachPhimComponent, ItemPhimComponent],
  imports: [
    CommonModule
  ]
})
export class InteractionModule { }
