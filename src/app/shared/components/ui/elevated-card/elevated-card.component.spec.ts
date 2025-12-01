import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElevatedCardComponent } from './elevated-card.component';

describe('ElevatedCardComponent', () => {
  let component: ElevatedCardComponent;
  let fixture: ComponentFixture<ElevatedCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElevatedCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElevatedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
