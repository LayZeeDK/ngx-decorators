import { browser } from 'protractor';

import { OnPushPage } from './on-push.po';

describe('OnPush Change Detection (Angular Version 6)', () => {
  beforeEach(() => {
    page = new OnPushPage();
    page.navigateTo();
  });

  let page: OnPushPage;

  it('detects changes on push by default', () => {
    browser.sleep(50);

    expect(page.text).toBe('OnPushComponent works!');
  });
});
