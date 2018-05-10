import {
  Component as ComponentOptions,
  Component as NgComponent,
  TypeDecorator,
} from '@angular/core';

import { compose } from './common';
import { ComponentOptionsCombinator } from './component-options-combinator';

// Not called 'ComponentDecorator', as @angular/core declares one of that name.
export type CustomComponentDecorator =
  (options: ComponentOptions) => TypeDecorator;
type ComponentDecoratorFactory =
  (combinators: ReadonlyArray<ComponentOptionsCombinator>) =>
    CustomComponentDecorator;
type Combinators = ReadonlyArray<ComponentOptionsCombinator>;

/**
 * Create a custom component decorator by composing the specified component
 * option combinators.
 *
 * @param combinators Component option combinators.
 */
export const createComponentDecorator: ComponentDecoratorFactory =
  (combinators: Combinators = []): CustomComponentDecorator =>
    (options: ComponentOptions): TypeDecorator =>
      compose(NgComponent, ...combinators)(options);
