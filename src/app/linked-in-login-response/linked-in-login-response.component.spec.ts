import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedInLoginResponseComponent } from './linked-in-login-response.component';

describe('LinkedInLoginResponseComponent', () => {
  let component: LinkedInLoginResponseComponent;
  let fixture: ComponentFixture<LinkedInLoginResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkedInLoginResponseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkedInLoginResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
