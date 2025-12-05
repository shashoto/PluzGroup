import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HcmTableComponent } from './hcm-table.component';

describe('HcmTableComponent', () => {
  let component: HcmTableComponent;
  let fixture: ComponentFixture<HcmTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HcmTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HcmTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
