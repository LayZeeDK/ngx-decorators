import {
  Component as ComponentOptions,
  TypeDecorator,
} from '@angular/core';
import { Component as NgComponent } from '@angular/core';

import { compose } from '../common';
import { ComponentOptionsCombinator } from './component-options-combinator';

let optionCombinators: ReadonlyArray<ComponentOptionsCombinator> = [];
export const addCombinators: ((...cs: ComponentOptionsCombinator[]) => void) =
  (...combinators) => {
    optionCombinators = [
      ...optionCombinators,
      ...combinators,
    ];
  };
export const Component: ((options: ComponentOptions) => TypeDecorator) =
  options => compose(NgComponent, ...optionCombinators)(options);
