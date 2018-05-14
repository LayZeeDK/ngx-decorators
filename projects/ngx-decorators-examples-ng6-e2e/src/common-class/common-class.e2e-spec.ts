import { CommonClassPage } from './common-class.po';

describe('Common CSS Class (Angular Version 6)', () => {
  beforeEach(() => {
    page = new CommonClassPage();
    page.navigateTo();
  });

  let page: CommonClassPage;

  it('adds a common class by default', () => {
    expect(page.classes).toContain('o-custom-element');
  });
});
