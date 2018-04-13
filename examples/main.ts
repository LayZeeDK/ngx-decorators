import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { configureComponentDecorator } from './configure-component-decorator';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

configureComponentDecorator();
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(error => console.log(error));
