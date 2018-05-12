import { ShadowDomPage } from './shadow-dom.po';

describe('Shadow DOM (Angular Version 6)', () => {
  beforeEach(async () => {
    page = new ShadowDomPage();

    await page.navigateTo();
  });

  let page: ShadowDomPage;

  it('uses Shadow DOM by default', () => {
    expect(page.getTextInShadowDom()).toBe('ShadowDomComponent works!');
  });
});
