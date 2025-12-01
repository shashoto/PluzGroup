import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UltraReliableComponent } from './ultra-reliable.component';

describe('UltraReliableComponent', () => {
  let component: UltraReliableComponent;
  let fixture: ComponentFixture<UltraReliableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UltraReliableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UltraReliableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
