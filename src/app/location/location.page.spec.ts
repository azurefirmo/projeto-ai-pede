import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationPage } from './location.page';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { NavController, Platform } from '@ionic/angular';

describe('LocationPage', () => {
  let component: LocationPage;
  let fixture: ComponentFixture<LocationPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: Geolocation, useValue: {} },
        { provide: NavController, useValue: {} },
        { provide: Platform, useValue: { ready: () => Promise.resolve() } }
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
