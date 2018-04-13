import { ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import {
  addCombinators,
  addHostClass,
  ComponentOptionsCombinator,
  useChangeDetection,
  useViewEncapsulation,
} from 'ngx-decorators';

export function configureComponentDecorator(): void {
  addCombinators(
    addCommonClass,
    useShadowDom,
    detectChangesOnPush);
}

const commonClass: string = 'o-custom-element';
const addCommonClass: ComponentOptionsCombinator = addHostClass(commonClass);
const useShadowDom: ComponentOptionsCombinator =
  useViewEncapsulation(ViewEncapsulation.Native);
const detectChangesOnPush: ComponentOptionsCombinator =
  useChangeDetection(ChangeDetectionStrategy.OnPush);
