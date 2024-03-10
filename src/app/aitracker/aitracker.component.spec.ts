import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AitrackerComponent } from './aitracker.component';

describe('AitrackerComponent', () => {
  let component: AitrackerComponent;
  let fixture: ComponentFixture<AitrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AitrackerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AitrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
