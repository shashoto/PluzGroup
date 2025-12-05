import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PtpTableComponent } from './ptp-table.component';

describe('PtpTableComponent', () => {
  let component: PtpTableComponent;
  let fixture: ComponentFixture<PtpTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PtpTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PtpTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
