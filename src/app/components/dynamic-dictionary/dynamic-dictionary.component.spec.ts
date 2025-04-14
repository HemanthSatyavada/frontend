import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicDictionaryComponent } from './dynamic-dictionary.component';

describe('DynamicDictionaryComponent', () => {
  let component: DynamicDictionaryComponent;
  let fixture: ComponentFixture<DynamicDictionaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicDictionaryComponent]
    });
    fixture = TestBed.createComponent(DynamicDictionaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
