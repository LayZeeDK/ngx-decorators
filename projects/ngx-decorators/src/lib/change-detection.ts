import { ChangeDetectionStrategy } from '@angular/core';

import { ComponentOptionsCombinator } from './component-options-combinator';

export const forceChangeDetection:
  ((cds: ChangeDetectionStrategy) => ComponentOptionsCombinator) =
  changeDetection =>
    options => ({
      ...options,
      changeDetection,
    });
export const useChangeDetection:
  ((cds: ChangeDetectionStrategy) => ComponentOptionsCombinator) =
  changeDetection =>
    options => ({
      changeDetection,
      ...options,
    });
