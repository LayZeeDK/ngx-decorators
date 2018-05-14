# Decorators for Angular (ngx-decorators)
Manage your Angular component decorators like a boss.

## Installation
Install using NPM CLI
```
npm install --save ngx-decorators
```

or using Yarn CLI
```
yarn add ngx-decorators
```

## Use cases
### Custom component decorator
Do you find yourself copying and pasting the same decorator configuration
options for your components?

Create a custom component decorator and use it as a drop-in replacement for
`Component` from `@angular/core`. You only need to change the `import`
statement.

### Customize defaults
The Angular component decorator defaults to emulated view encapsulation and the
default change detection strategy.

Create a custom component decorator with no view encapsulation, *native* view
encapsulation (shadow DOM) and the `OnPush` change detection strategy. Set
defaults or enforce your choices.

### Build your own component options combinators
We have included helpers for managing change detection and view encapsulation as
well as adding a common class to the host component.

Create your own component options combinators to manage white space preservation
in component templates, add host element attributes, host styles or any other
current or future component option.

## Usage
Angular Material uses TSLint rules to enforce common component decorator
options. Let us create a custom component decorator to enforce the common
options.

```typescript
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

export const Component: CustomComponentDecorator = createComponentDecorator([
  detectChangesOnPush,
  noViewEncapsulation,
  alwaysMinifyTemplate,
]);

```

You can omit the types if you find it less distracting:

```typescript
// src/app/decorators/component.decorator.ts
import {
  ChangeDetectionStrategy,
  Component as ComponentOptions,
  ViewEncapsulation,
} from '@angular/core';
import {
  createComponentDecorator,
  forceChangeDetection,
  forceViewEncapsulation,
} from 'ngx-decorators';

const detectChangesOnPush =
  forceChangeDetection(ChangeDetectionStrategy.OnPush);
const noViewEncapsulation =
  forceViewEncapsulation(ViewEncapsulation.None);
const alwaysMinifyTemplate = options => ({
    ...options,
    preserveWhitespaces: false,
  });

export const Component = createComponentDecorator([
  detectChangesOnPush,
  noViewEncapsulation,
  alwaysMinifyTemplate,
]);

```

Now we are ready to use it in our project.

Before we had

*(sample from [Angular Material version 5](https://github.com/angular/material2/blob/5.2.5/src/lib/card/card.ts))*

```typescript
import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'mat-card',
  exportAs: 'matCard',
  templateUrl: 'card.html',
  styleUrls: ['card.css'],
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {'class': 'mat-card'}
})
export class MatCard {}
```

Now we are left with

```typescript
import { Component } from '../decorators/component.decorator';

@Component({
  moduleId: module.id,
  selector: 'mat-card',
  exportAs: 'matCard',
  templateUrl: 'card.html',
  styleUrls: ['card.css'],
  host: {'class': 'mat-card'}
})
export class MatCard {}
```

Even if we by accident adds the default change detection strategy or emulated
view encapsulation, our custom component decorator takes care of it for us. This
is of course entirely customizable.

Look at the example app in this repository to see our various helpers in-use.

## Supported Angular versions
*Decorators for Angular*  has been tested with Angular versions 2 through 6. It
is unlikely that it will stop working until Angular's component decorator or the
public API of `@angular/core` gets breaking changes.

## Caveats
Do not use a custom component decorator for your root component, i.e. 
`AppComponent` unless you are using Node.js version 9 or newer.
