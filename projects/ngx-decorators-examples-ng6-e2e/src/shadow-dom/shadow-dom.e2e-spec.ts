import { ShadowDomPage } from './shadow-dom.po';

describe('Shadow DOM (Angular Version 6)', () => {
  beforeEach(() => {
    page = new ShadowDomPage();
    page.navigateTo();
  });

  let page: ShadowDomPage;

  it('uses Shadow DOM by default', () => {
    expect(page.shadowDom.text).toBe('ShadowDomComponent works!');
  });
});
