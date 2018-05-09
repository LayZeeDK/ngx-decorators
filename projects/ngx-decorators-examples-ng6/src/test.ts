// This file is required by karma.conf.js and loads recursively all the .spec
// and framework files
// tslint:disable:ordered-imports

import 'zone.js/dist/zone-testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';

import { WebpackContext, WebpackRequire } from '$testing';

declare const require: WebpackRequire;

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting());
// Then we find all the tests.
const context: WebpackContext = require.context('./', true, /\.spec\.ts$/);
// And load the modules.
context.keys().map(context);
