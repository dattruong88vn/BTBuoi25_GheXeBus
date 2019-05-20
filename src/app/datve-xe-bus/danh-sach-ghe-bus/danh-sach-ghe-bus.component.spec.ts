import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhSachGheBusComponent } from './danh-sach-ghe-bus.component';

describe('DanhSachGheBusComponent', () => {
  let component: DanhSachGheBusComponent;
  let fixture: ComponentFixture<DanhSachGheBusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanhSachGheBusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhSachGheBusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
