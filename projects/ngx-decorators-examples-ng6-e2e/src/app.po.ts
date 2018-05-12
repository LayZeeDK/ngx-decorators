import { browser, by, element } from 'protractor';

export class AppPage {
  public navigateTo(): Promise<void> {
    return browser.get('/') as any as Promise<void>;
  }

  public getParagraphText(): Promise<string> {
    return element(by.css('example-app h1'))
      .getText() as any as Promise<string>;
  }
}
