import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhsachPhimComponent } from './danhsach-phim.component';

describe('DanhsachPhimComponent', () => {
  let component: DanhsachPhimComponent;
  let fixture: ComponentFixture<DanhsachPhimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanhsachPhimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhsachPhimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
