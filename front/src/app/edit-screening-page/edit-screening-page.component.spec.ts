import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditScreeningPageComponent } from './edit-screening-page.component';

describe('EditScreeningPageComponent', () => {
  let component: EditScreeningPageComponent;
  let fixture: ComponentFixture<EditScreeningPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditScreeningPageComponent]
    });
    fixture = TestBed.createComponent(EditScreeningPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
