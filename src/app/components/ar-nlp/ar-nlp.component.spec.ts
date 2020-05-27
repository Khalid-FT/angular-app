import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArNLPComponent } from './ar-nlp.component';

describe('ArNLPComponent', () => {
  let component: ArNLPComponent;
  let fixture: ComponentFixture<ArNLPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArNLPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArNLPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
