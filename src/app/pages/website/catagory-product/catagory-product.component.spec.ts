import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatagoryProductComponent } from './catagory-product.component';

describe('CatagoryProductComponent', () => {
  let component: CatagoryProductComponent;
  let fixture: ComponentFixture<CatagoryProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatagoryProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatagoryProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
