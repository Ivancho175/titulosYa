import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByRegistrationComponent } from './by-registration.component';

describe('ByRegistrationComponent', () => {
  let component: ByRegistrationComponent;
  let fixture: ComponentFixture<ByRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ByRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ByRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
