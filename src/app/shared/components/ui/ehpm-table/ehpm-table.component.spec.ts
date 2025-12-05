import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EhpmTableComponent } from './ehpm-table.component';

describe('EhpmTableComponent', () => {
  let component: EhpmTableComponent;
  let fixture: ComponentFixture<EhpmTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EhpmTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EhpmTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
