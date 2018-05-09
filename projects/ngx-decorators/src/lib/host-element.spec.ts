// tslint:disable:max-line-length
import {
  ChangeDetectionStrategy,
  Component as ComponentOptions,
  ViewEncapsulation,
} from '@angular/core';

import { ComponentOptionsCombinator } from './component-options-combinator';
import { addHostClass } from './host-element';

describe('Host element', () => {
  describe('addHostClass', () => {
    const commonClass: string = 'spec-component';
    const addCommonClass: ComponentOptionsCombinator = addHostClass(commonClass);

    it('adds a host class to the component configuration', () => {
      // Act
      const options: ComponentOptions = addCommonClass({});

      // Assert
      const expectedOptions: ComponentOptions = {
        host: {
          class: commonClass,
        },
      };
      expect(options).toEqual(expectedOptions);
    });

    it('keeps existing host class option', () => {
      // Act
      const options: ComponentOptions = addCommonClass({
        host: {
          class: 'primary-button',
        },
      });

      // Assert
      const expectedOptions: ComponentOptions = {
        host: {
          class: `${commonClass} primary-button`,
        },
      };
      expect(options).toEqual(expectedOptions);
    });

    it('leaves other component options unchanged', () => {
      // Arrange
      const initialOptions: ComponentOptions = {
        changeDetection: ChangeDetectionStrategy.OnPush,
        encapsulation: ViewEncapsulation.None,
        host: {
          id: 'spec-id',
        },
      };

      // Act
      const options: ComponentOptions = addCommonClass(initialOptions);

      // Assert
      const expectedOptions: ComponentOptions = {
        ...initialOptions,
        host: {
          class: commonClass,
          id: 'spec-id',
        },
      };
      expect(options).toEqual(expectedOptions);
    });
  });
});
