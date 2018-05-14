import { ViewEncapsulation } from '@angular/core';
import {
  ComponentOptionsCombinator,
  createComponentDecorator,
  CustomComponentDecorator,
  useViewEncapsulation,
} from 'ngx-decorators';

const useShadowDom: ComponentOptionsCombinator =
  useViewEncapsulation(ViewEncapsulation.Native);

export const ShadowDom: CustomComponentDecorator =
  createComponentDecorator([useShadowDom]);
