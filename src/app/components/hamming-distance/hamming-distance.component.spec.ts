import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HammingDistanceComponent } from './hamming-distance.component';

describe('HammingDistanceComponent', () => {
  let component: HammingDistanceComponent;
  let fixture: ComponentFixture<HammingDistanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HammingDistanceComponent]
    });
    fixture = TestBed.createComponent(HammingDistanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
