import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { BakeryDetailPage } from './bakery-detail.page';
import { BakeryService } from '../services/bakery.service';
import { ActivatedRoute } from '@angular/router';

describe('BakeryDetailPage', () => {
  let component: BakeryDetailPage;
  let fixture: ComponentFixture<BakeryDetailPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BakeryDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: BakeryService, useValue: { getMenuBakeries: () => ({ subscribe: () => undefined }) } },
        { provide: ActivatedRoute, useValue: { snapshot: { queryParamMap: { get: () => '1' } } } }
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BakeryDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
