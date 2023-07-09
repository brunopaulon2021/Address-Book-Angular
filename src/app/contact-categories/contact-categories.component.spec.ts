import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactCategoriesComponent } from './contact-categories.component';

describe('ContactCategoriesComponent', () => {
  let component: ContactCategoriesComponent;
  let fixture: ComponentFixture<ContactCategoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactCategoriesComponent]
    });
    fixture = TestBed.createComponent(ContactCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
