import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatveXeBusComponent } from './datve-xe-bus.component';

describe('DatveXeBusComponent', () => {
  let component: DatveXeBusComponent;
  let fixture: ComponentFixture<DatveXeBusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatveXeBusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatveXeBusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
