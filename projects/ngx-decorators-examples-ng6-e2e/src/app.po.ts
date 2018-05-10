import { browser, by, element } from 'protractor';

export class AppPage {
  public navigateTo(): Promise<any> {
    return browser.get('/');
  }

  public getParagraphText(): Promise<string> {
    return element(by.css('example-root h1')).getText();
  }
}
