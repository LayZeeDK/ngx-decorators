import {
  ChangeDetectionStrategy,
  Component as ComponentOptions,
  ViewEncapsulation,
} from '@angular/core';

import { forceChangeDetection, useChangeDetection } from './change-detection';
import { ComponentOptionsCombinator } from './component-options-combinator';

describe('Change detection', () => {
  describe('forceChangeDetection', () => {
    const forceOnPush: ComponentOptionsCombinator =
      forceChangeDetection(ChangeDetectionStrategy.OnPush)

    it('adds a change detection strategy to the component configuration', () => {
      // Act
      const options: ComponentOptions = forceOnPush({});

      // Assert
      const expectedOptions: ComponentOptions = {
        changeDetection: ChangeDetectionStrategy.OnPush,
      };
      expect(options).toEqual(expectedOptions);
    });

    it('overrides a configured change detection strategy', () => {
      // Act
      const options: ComponentOptions = forceOnPush({
        changeDetection: ChangeDetectionStrategy.Default,
      });

      // Assert
      const expectedOptions: ComponentOptions = {
        changeDetection: ChangeDetectionStrategy.OnPush,
      };
      expect(options).toEqual(expectedOptions);
    });

    it('leaves other component options unchanged', () => {
      // Arrange
      const initialOptions: ComponentOptions = {
        encapsulation: ViewEncapsulation.None,
        host: {
          class: 'spec-component',
        },
      };

      // Act
      const options: ComponentOptions = forceOnPush(initialOptions);

      // Assert
      const expectedOptions: ComponentOptions = {
        ...initialOptions,
        changeDetection: ChangeDetectionStrategy.OnPush,
      };
      expect(options).toEqual(expectedOptions);
    });
  });

  describe('useChangeDetection', () => {
    const useOnPush: ComponentOptionsCombinator =
      useChangeDetection(ChangeDetectionStrategy.OnPush)

    it('adds a default change detection strategy to the component configuration', () => {
      // Act
      const options: ComponentOptions = useOnPush({});

      // Assert
      const expectedOptions: ComponentOptions = {
        changeDetection: ChangeDetectionStrategy.OnPush,
      };
      expect(options).toEqual(expectedOptions);
    });

    it('does not override a configured change detection strategy', () => {
      // Act
      const options: ComponentOptions = useOnPush({
        changeDetection: ChangeDetectionStrategy.Default,
      });

      // Assert
      const expectedOptions: ComponentOptions = {
        changeDetection: ChangeDetectionStrategy.Default,
      };
      expect(options).toEqual(expectedOptions);
    });

    it('leaves other component options unchanged', () => {
      // Arrange
      const initialOptions: ComponentOptions = {
        encapsulation: ViewEncapsulation.None,
        host: {
          class: 'spec-component',
        },
      };

      // Act
      const options: ComponentOptions = useOnPush(initialOptions);

      // Assert
      const expectedOptions: ComponentOptions = {
        ...initialOptions,
        changeDetection: ChangeDetectionStrategy.OnPush,
      };
      expect(options).toEqual(expectedOptions);
    });
  });
});
