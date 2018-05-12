import { browser, WebElement } from 'protractor';

import { as } from '../common';

export class ShadowDomPage {
  getTextInShadowDom(): Promise<string | undefined> {
    return as<Promise<WebElement>>(
      browser.executeScript((): HTMLElement | undefined => {
        const pageElement: HTMLElement =
          document.querySelector('example-shadow-dom');

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
  }

  navigateTo(): Promise<void> {
    return as(browser.get('/shadow-dom'));
  }
}
