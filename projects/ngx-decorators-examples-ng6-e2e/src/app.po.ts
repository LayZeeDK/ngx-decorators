import { browser, by, element } from 'protractor';

import { as } from '$common/coercion';

export class AppPage {
  public navigateTo(): Promise<any> {
    return as<Promise<any>>(browser.get('/'));
  }

  public getParagraphText(): Promise<string> {
    return as<Promise<string>>(element(by.css('example-root h1')).getText());
  }
}
