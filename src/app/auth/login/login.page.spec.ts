import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPage } from './login.page';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: AuthService, useValue: {} },
        { provide: Router, useValue: {} }
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
