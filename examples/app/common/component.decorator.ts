import { ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import {
  addHostClass,
  ComponentOptionsCombinator,
  createComponentDecorator,
  CustomComponentDecorator,
  useChangeDetection,
  useViewEncapsulation,
} from 'ngx-decorators';

const commonClass: string = 'o-custom-element';
const addCommonClass: ComponentOptionsCombinator = addHostClass(commonClass);
const useShadowDom: ComponentOptionsCombinator =
  useViewEncapsulation(ViewEncapsulation.Native);
const detectChangesOnPush: ComponentOptionsCombinator =
  useChangeDetection(ChangeDetectionStrategy.OnPush);

export const Component: CustomComponentDecorator = createComponentDecorator([
  addCommonClass,
  useShadowDom,
  detectChangesOnPush,
]);
