// Testing setup by Gerard Sans (https://stackblitz.com/@gsans)

// Jasmine
import './test/jasmine-setup';
import 'jasmine-core/lib/jasmine-core/jasmine-html.js';
import 'jasmine-core/lib/jasmine-core/boot.js';

// Angular polyfills
import './polyfills';

// Zone.js
// This file is required by karma.conf.js and loads recursively all the .spec and framework files
import 'zone.js/dist/async-test';
import 'zone.js/dist/fake-async-test';
import 'zone.js/dist/long-stack-trace-zone';
import 'zone.js/dist/proxy.js';
import 'zone.js/dist/sync-test';
// Requires 'zone.js/dist/proxy.js' and 'zone.js/dist/sync-test';
import 'zone.js/dist/jasmine-patch';

// Angular
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';

// Test suites
import './test.ts'

(function bootstrap () {
  if (window.jasmineRef) {
    location.reload();

    return;
  }

  // Bootstrap Jasmine
  window.onload(new Event('anything'));
  window.jasmineRef = jasmine.getEnv();

  // Bootstrap Angular testing
  // First, initialize the Angular testing environment.
  getTestBed().initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting()
  );
}());
