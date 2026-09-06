import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPage } from './register.page';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

describe('RegisterPage', () => {
  let component: RegisterPage;
  let fixture: ComponentFixture<RegisterPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: AuthService, useValue: {} },
        { provide: Router, useValue: {} }
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
