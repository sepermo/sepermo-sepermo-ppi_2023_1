/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GorrosComponent } from './gorros.component';

describe('GorrosComponent', () => {
  let component: GorrosComponent;
  let fixture: ComponentFixture<GorrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GorrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GorrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
