// tslint:disable:typedef
import { ComponentOptionsCombinator } from './component-options-combinator';

/**
 * Caution: Component properties that are decorated with `HostBinding` override
 *   this host class binding as well as any other host class binding passed to
 *   the `Component` decorator.
 */
export const addHostClass: ((className: string) => ComponentOptionsCombinator) =
  className =>
    options => ({
      ...options,
      host: {
        ...options.host,
        class: [className, (options.host && options.host.class)]
          .filter(x => x)
          .join(' '),
      },
    });
