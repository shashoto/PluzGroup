import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPluzGroupComponent } from './about-pluz-group.component';

describe('AboutPluzGroupComponent', () => {
  let component: AboutPluzGroupComponent;
  let fixture: ComponentFixture<AboutPluzGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutPluzGroupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutPluzGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
