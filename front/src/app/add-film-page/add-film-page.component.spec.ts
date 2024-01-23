import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFilmPageComponent } from './add-film-page.component';

describe('AddFilmPageComponent', () => {
  let component: AddFilmPageComponent;
  let fixture: ComponentFixture<AddFilmPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddFilmPageComponent]
    });
    fixture = TestBed.createComponent(AddFilmPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
