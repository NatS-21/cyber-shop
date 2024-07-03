import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesPagesComponent } from './favorites-pages.component';

describe('FavoritesPagesComponent', () => {
  let component: FavoritesPagesComponent;
  let fixture: ComponentFixture<FavoritesPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavoritesPagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoritesPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
