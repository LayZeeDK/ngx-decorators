import { AppPage } from './app.po';

describe('App (Angular Version 6)', () => {
  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  let page: AppPage;

  it('displays title', () => {
    expect(page.getParagraphText()).toContain('Decorators for Angular');
  });
});
