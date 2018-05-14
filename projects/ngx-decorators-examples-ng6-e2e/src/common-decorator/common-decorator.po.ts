import { browser, by, element, WebElement } from 'protractor';

import { as, fromSpaceSeparated } from '../common';

export class CommonDecoratorPage {
  get classes(): Promise<ReadonlyArray<string>> {
    return as<Promise<string>>(element(by.css('example-common-decorator'))
      .getAttribute('class'))
      .then(classAttribute => fromSpaceSeparated(classAttribute));
  }
  // tslint:disable-next-line:typedef
  shadowDom = {
    get text(): Promise<string | undefined> {
      return as<Promise<WebElement>>(
        browser.executeScript((): HTMLElement | undefined => {
          const pageElement: HTMLElement =
            document.querySelector('example-common-decorator');

          if (pageElement.shadowRoot === null) {
            return undefined;
          }

          return Array.from(pageElement.shadowRoot.children)
            .find(el =>
              el.tagName.toLowerCase() === 'p') as HTMLElement | undefined;
        }))
        .then(x => x !== undefined
          ? x
          : Promise.reject<WebElement>(undefined))
        .then(webEl => as<Promise<string>>(webEl.getText()))
        .then(text => text.trim())
        .catch(() => undefined);
    },
  };

  navigateTo(): Promise<void> {
    return as(browser.get('/common-decorator'));
  }
}
