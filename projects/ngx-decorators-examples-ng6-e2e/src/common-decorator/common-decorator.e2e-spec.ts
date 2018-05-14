import { browser } from 'protractor';

import { CommonDecoratorPage } from './common-decorator.po';

describe('Common Component Decorator (Angular Version 6)', () => {
  beforeEach(() => {
    page = new CommonDecoratorPage();
    page.navigateTo();
  });

  let page: CommonDecoratorPage;

  it('adds a common class by default', () => {
    expect(page.classes).toContain('o-custom-element');
  });

  it('uses Shadow DOM by default', () => {
    expect(page.shadowDom.text).toBe('CommonDecoratorComponent works!');
  });

  it('detects changes on push by default', () => {
    browser.sleep(50);

    expect(page.shadowDom.text).toBe('CommonDecoratorComponent works!');
  });
});
