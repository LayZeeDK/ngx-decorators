import { ViewEncapsulation } from '@angular/core';

import { ComponentOptionsCombinator } from './component-options-combinator';

export const forceViewEncapsulation:
  ((ve: ViewEncapsulation) => ComponentOptionsCombinator) =
  encapsulation =>
    options => ({
      ...options,
      encapsulation,
    })
export const useViewEncapsulation:
  ((ve: ViewEncapsulation) => ComponentOptionsCombinator) =
  encapsulation =>
    options => ({
      encapsulation,
      ...options,
    });
  