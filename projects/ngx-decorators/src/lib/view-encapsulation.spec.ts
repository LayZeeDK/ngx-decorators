import {
  ChangeDetectionStrategy,
  Component as ComponentOptions,
  ViewEncapsulation,
} from '@angular/core';

import { ComponentOptionsCombinator } from './component-options-combinator';
import { forceViewEncapsulation, useViewEncapsulation } from './view-encapsulation';

describe('View encapsulation', () => {
  describe('forceViewEncapsulation', () => {
    const forceShadowDom: ComponentOptionsCombinator =
      forceViewEncapsulation(ViewEncapsulation.Native);

    it('adds a view encapsulation to the component configuration', () => {
      // Act
      const options: ComponentOptions = forceShadowDom({});

      // Assert
      const expectedOptions: ComponentOptions = {
        encapsulation: ViewEncapsulation.Native,
      };
      expect(options).toEqual(expectedOptions);
    });

    it('overrides a configured view encapsulation', () => {
      // Act
      const options: ComponentOptions = forceShadowDom({
        encapsulation: ViewEncapsulation.None,
      });

      // Assert
      const expectedOptions: ComponentOptions = {
        encapsulation: ViewEncapsulation.Native,
      };
      expect(options).toEqual(expectedOptions);
    });

    it('leaves other component options unchanged', () => {
      // Arrange
      const initialOptions: ComponentOptions = {
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: {
          class: 'spec-component',
        },
      };

      // Act
      const options: ComponentOptions = forceShadowDom(initialOptions);

      // Assert
      const expectedOptions: ComponentOptions = {
        ...initialOptions,
        encapsulation: ViewEncapsulation.Native,
      };
      expect(options).toEqual(expectedOptions);
    });
  });

  describe('useViewEncapsulation', () => {
    const useShadowDom: ComponentOptionsCombinator =
      useViewEncapsulation(ViewEncapsulation.Native);

    it('adds a default view encapsulation to the component configuration', () => {
      // Act
      const options: ComponentOptions = useShadowDom({});

      // Assert
      const expectedOptions: ComponentOptions = {
        encapsulation: ViewEncapsulation.Native,
      };
      expect(options).toEqual(expectedOptions);
    });

    it('does not override a configured view encapsulation', () => {
      // Act
      const options: ComponentOptions = useShadowDom({
        encapsulation: ViewEncapsulation.None,
      });

      // Assert
      const expectedOptions: ComponentOptions = {
        encapsulation: ViewEncapsulation.None,
      };
      expect(options).toEqual(expectedOptions);
    });

    it('leaves other component options unchanged', () => {
      // Arrange
      const initialOptions: ComponentOptions = {
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: {
          class: 'spec-component',
        },
      };

      // Act
      const options: ComponentOptions = useShadowDom(initialOptions);

      // Assert
      const expectedOptions: ComponentOptions = {
        ...initialOptions,
        encapsulation: ViewEncapsulation.Native,
      };
      expect(options).toEqual(expectedOptions);
    });
  });
});
