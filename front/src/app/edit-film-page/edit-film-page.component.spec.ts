import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFilmPageComponent } from './edit-film-page.component';

describe('EditFilmPageComponent', () => {
  let component: EditFilmPageComponent;
  let fixture: ComponentFixture<EditFilmPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditFilmPageComponent]
    });
    fixture = TestBed.createComponent(EditFilmPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
