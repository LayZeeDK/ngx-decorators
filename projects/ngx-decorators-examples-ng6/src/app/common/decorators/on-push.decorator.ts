import { ChangeDetectionStrategy } from '@angular/core';
import {
  ComponentOptionsCombinator,
  createComponentDecorator,
  CustomComponentDecorator,
  useChangeDetection,
} from 'ngx-decorators';

const detectChangesOnPush: ComponentOptionsCombinator =
  useChangeDetection(ChangeDetectionStrategy.OnPush);

export const OnPush: CustomComponentDecorator =
  createComponentDecorator([detectChangesOnPush]);
