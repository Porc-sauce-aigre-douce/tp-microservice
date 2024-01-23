import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddScreeningPageComponent } from './add-screening-page.component';

describe('AddScreeningPageComponent', () => {
  let component: AddScreeningPageComponent;
  let fixture: ComponentFixture<AddScreeningPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddScreeningPageComponent]
    });
    fixture = TestBed.createComponent(AddScreeningPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
