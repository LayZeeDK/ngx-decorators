import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';

describe(AppComponent.name, () => {
  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [RouterTestingModule],
      schemas: [NO_ERRORS_SCHEMA],
    });
    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    component = undefined as any;
    fixture = undefined as any;
  });

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));

  it(`should have a descriptive title`, async(() => {
    expect(component.title)
      .toContain('Decorators for Angular');
  }));

  it('should render title in an h1 tag', async(() => {
    const h1: HTMLElement = fixture.debugElement.query(
      By.css('h1'))
      .nativeElement;

    expect(h1.textContent).toContain('Decorators for Angular');
  }));
});
