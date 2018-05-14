import { browser, by, element } from 'protractor';

import { as } from '../common';

export class OnPushPage {
  get text(): Promise<string> {
    return as<Promise<string>>(element(by.css('example-on-push'))
      .getText())
      .then(text => text.trim());
  }

  navigateTo(): Promise<void> {
    return as(browser.get('/on-push'));
  }
}
