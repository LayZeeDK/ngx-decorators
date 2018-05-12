import {
  addHostClass,
  ComponentOptionsCombinator,
  createComponentDecorator,
  CustomComponentDecorator,
} from 'ngx-decorators';

const commonClass: string = 'o-custom-element';
const addCommonClass: ComponentOptionsCombinator = addHostClass(commonClass);

export const CommonClass: CustomComponentDecorator =
  createComponentDecorator([addCommonClass]);
