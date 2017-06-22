/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ObservComponent } from './observ.component';

describe('ObservComponent', () => {
  let component: ObservComponent;
  let fixture: ComponentFixture<ObservComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
