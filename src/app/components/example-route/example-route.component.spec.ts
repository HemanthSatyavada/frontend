import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleRouteComponent } from './example-route.component';

describe('ExampleRouteComponent', () => {
  let component: ExampleRouteComponent;
  let fixture: ComponentFixture<ExampleRouteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExampleRouteComponent]
    });
    fixture = TestBed.createComponent(ExampleRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
