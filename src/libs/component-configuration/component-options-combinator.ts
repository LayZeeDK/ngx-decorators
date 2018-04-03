import { Component as ComponentOptions } from '@angular/core';

export type ComponentOptionsCombinator =
  (options: ComponentOptions) => ComponentOptions;
