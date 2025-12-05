import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrhbTableComponent } from './prhb-table.component';

describe('PrhbTableComponent', () => {
  let component: PrhbTableComponent;
  let fixture: ComponentFixture<PrhbTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrhbTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrhbTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
