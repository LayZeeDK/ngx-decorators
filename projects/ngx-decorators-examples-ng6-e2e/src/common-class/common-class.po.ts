import { browser, by, element } from 'protractor';

import { as, fromSpaceSeparated } from '../common';

export class CommonClassPage {
  get classes(): Promise<ReadonlyArray<string>> {
    return as<Promise<string>>(element(by.css('example-common-class'))
      .getAttribute('class'))
      .then(classAttribute => fromSpaceSeparated(classAttribute));
  }

  navigateTo(): Promise<void> {
    return as(browser.get('/common-class'));
  }
}
