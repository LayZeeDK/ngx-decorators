import {
  ChangeDetectionStrategy,
  Component as ComponentOptions,
  ViewEncapsulation,
} from '@angular/core';
import {
  ComponentOptionsCombinator,
  createComponentDecorator,
  CustomComponentDecorator,
  forceChangeDetection,
  forceViewEncapsulation,
} from 'ngx-decorators';

const detectChangesOnPush: ComponentOptionsCombinator =
  forceChangeDetection(ChangeDetectionStrategy.OnPush);
const noViewEncapsulation: ComponentOptionsCombinator =
  forceViewEncapsulation(ViewEncapsulation.None);
const alwaysMinifyTemplate: ComponentOptionsCombinator =
  (options: ComponentOptions): ComponentOptions => ({
    ...options,
    preserveWhitespaces: false,
  });

export const Material: CustomComponentDecorator = createComponentDecorator([
  detectChangesOnPush,
  noViewEncapsulation,
  alwaysMinifyTemplate,
]);
