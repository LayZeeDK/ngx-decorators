import { browser, by, element } from 'protractor';

import { as } from '../common';

export class CommonClassPage {
  getPageClasses(): Promise<ReadonlyArray<string>> {
    return as<Promise<string>>(element(by.css('example-common-class'))
      .getAttribute('class'))
      .then(classAttribute => this.toClasses(classAttribute));
  }

  navigateTo(): Promise<void> {
    return as(browser.get('/common-class'));
  }

  private toClasses(classAttribute: string): ReadonlyArray<string> {
    return classAttribute
      .split(' ')
      .map(x => x.trim())
      .filter(x => x !== '');
  }
}
