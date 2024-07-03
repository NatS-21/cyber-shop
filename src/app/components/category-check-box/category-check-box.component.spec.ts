import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryCheckBoxComponent } from './category-check-box.component';

describe('CategoryCheckBoxComponent', () => {
  let component: CategoryCheckBoxComponent;
  let fixture: ComponentFixture<CategoryCheckBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryCheckBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryCheckBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
