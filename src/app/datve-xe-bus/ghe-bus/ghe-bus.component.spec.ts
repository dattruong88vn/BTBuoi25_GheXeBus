import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GheBusComponent } from './ghe-bus.component';

describe('GheBusComponent', () => {
  let component: GheBusComponent;
  let fixture: ComponentFixture<GheBusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GheBusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GheBusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
