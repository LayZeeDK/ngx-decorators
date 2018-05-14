import { browser } from 'protractor';

import { MaterialPage } from './material.po';

describe('Angular Material Decorator (Angular Version 6)', () => {
  beforeEach(() => {
    page = new MaterialPage();
    page.navigateTo();
  });

  let page: MaterialPage;

  it('detects changes on push', () => {
    browser.sleep(50);

    expect(page.text).toBe('MaterialComponent works!');
  });

  it('trims white space in template', () => {
    expect(page.html).toBe('<h1> MaterialComponent works! </h1>');
  });

  it('has no view encapsulation', () => {
    expect(page.textColor).toBe('rgba(0, 0, 255, 1)');
  });
});
