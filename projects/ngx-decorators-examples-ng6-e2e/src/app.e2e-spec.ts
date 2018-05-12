import { AppPage } from './app.po';

describe('App (Angular Version 6)', () => {
  beforeEach(() => {
    page = new AppPage();
  });

  let page: AppPage;

  it('displays title', () => {
    page.navigateTo();

    expect(page.getParagraphText()).toContain('Decorators for Angular');
  });
});
