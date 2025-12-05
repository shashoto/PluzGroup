import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiProductsTabsComponent } from './multi-products-tabs.component';

describe('MultiProductsTabsComponent', () => {
  let component: MultiProductsTabsComponent;
  let fixture: ComponentFixture<MultiProductsTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiProductsTabsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiProductsTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
