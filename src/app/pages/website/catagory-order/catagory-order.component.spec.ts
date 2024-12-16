import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatagoryOrderComponent } from './catagory-order.component';

describe('CatagoryOrderComponent', () => {
  let component: CatagoryOrderComponent;
  let fixture: ComponentFixture<CatagoryOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatagoryOrderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatagoryOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
