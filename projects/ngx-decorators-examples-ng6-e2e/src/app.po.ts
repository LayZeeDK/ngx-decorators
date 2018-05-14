import { browser, by, element } from 'protractor';

import { as } from './common';

export class AppPage {
  navigateTo(): Promise<void> {
    return as(browser.get('/'));
  }

  getParagraphText(): Promise<string> {
    return as(element(by.css('example-app h1')).getText());
  }
}
