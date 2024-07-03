import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductLibraryComponent } from './product-library.component';

describe('ProductLibraryComponent', () => {
  let component: ProductLibraryComponent;
  let fixture: ComponentFixture<ProductLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductLibraryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
