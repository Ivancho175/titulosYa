import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleStudyComponent } from './single-study.component';

describe('SingleStudyComponent', () => {
  let component: SingleStudyComponent;
  let fixture: ComponentFixture<SingleStudyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleStudyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
