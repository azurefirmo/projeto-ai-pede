import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab1Page } from './tab1.page';
import { BakeryService } from '../services/bakery.service';
import { NavController } from '@ionic/angular';

describe('Tab1Page', () => {
  let component: Tab1Page;
  let fixture: ComponentFixture<Tab1Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Tab1Page],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: BakeryService, useValue: { getBakeries: () => ({ subscribe: () => undefined }) } },
        { provide: NavController, useValue: {} }
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
