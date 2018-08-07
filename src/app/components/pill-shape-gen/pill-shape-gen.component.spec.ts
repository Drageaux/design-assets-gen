import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PillShapeGenComponent } from './pill-shape-gen.component';

describe('PillShapeGenComponent', () => {
  let component: PillShapeGenComponent;
  let fixture: ComponentFixture<PillShapeGenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PillShapeGenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PillShapeGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
