import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivEstadoComponent } from './activ-estado.component';

describe('ActivEstadoComponent', () => {
  let component: ActivEstadoComponent;
  let fixture: ComponentFixture<ActivEstadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivEstadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivEstadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
