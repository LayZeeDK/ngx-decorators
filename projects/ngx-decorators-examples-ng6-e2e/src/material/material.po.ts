import { browser, by, element } from 'protractor';

import { as } from '../common';

export class MaterialPage {
  get html(): Promise<string> {
    return as(browser.executeScript((): string =>
      document.querySelector('example-material').innerHTML));
  }
  get text(): Promise<string> {
    return as(element(by.css('example-material')).getText());
  }
  get textColor(): Promise<string> {
    return as(element(by.css('example-material h1')).getCssValue('color'));
  }

  navigateTo(): Promise<void> {
    return as(browser.get('/material'));
  }
}
