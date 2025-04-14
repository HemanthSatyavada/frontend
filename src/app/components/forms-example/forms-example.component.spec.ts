import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsExampleComponent } from './forms-example.component';

describe('FormsExampleComponent', () => {
  let component: FormsExampleComponent;
  let fixture: ComponentFixture<FormsExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormsExampleComponent]
    });
    fixture = TestBed.createComponent(FormsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
