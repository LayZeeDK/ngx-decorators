import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDecoratorsComponent } from './ngx-decorators.component';

describe('NgxDecoratorsComponent', () => {
  let component: NgxDecoratorsComponent;
  let fixture: ComponentFixture<NgxDecoratorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxDecoratorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDecoratorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
