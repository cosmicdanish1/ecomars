import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatagoryCartComponent } from './catagory-cart.component';

describe('CatagoryCartComponent', () => {
  let component: CatagoryCartComponent;
  let fixture: ComponentFixture<CatagoryCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatagoryCartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatagoryCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
