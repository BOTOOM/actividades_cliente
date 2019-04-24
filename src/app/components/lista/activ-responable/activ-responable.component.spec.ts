import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivResponableComponent } from './activ-responable.component';

describe('ActivResponableComponent', () => {
  let component: ActivResponableComponent;
  let fixture: ComponentFixture<ActivResponableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivResponableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivResponableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
