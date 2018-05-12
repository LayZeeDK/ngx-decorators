import { CommonClassPage } from './common-class.po';

describe('Common CSS Class (Angular Version 6)', () => {
  beforeEach(() => {
    page = new CommonClassPage();
  });

  let page: CommonClassPage;

  it('adds a common class by default', () => {
    page.navigateTo();

    expect(page.getPageClasses()).toContain('o-custom-element');
  });
});
