import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopInfoCardComponent } from './shop-info-card.component';

describe('ShopInfoCardComponent', () => {
  let component: ShopInfoCardComponent;
  let fixture: ComponentFixture<ShopInfoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopInfoCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
