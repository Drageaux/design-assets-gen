import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressBarGenComponent } from './progress-bar-gen.component';

describe('ProgressBarGenComponent', () => {
  let component: ProgressBarGenComponent;
  let fixture: ComponentFixture<ProgressBarGenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressBarGenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressBarGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
