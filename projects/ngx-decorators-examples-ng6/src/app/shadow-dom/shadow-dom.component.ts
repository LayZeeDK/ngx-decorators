import { ShadowDom } from '../common/decorators';

@ShadowDom({
  selector: 'example-shadow-dom',
  template: '<p>ShadowDomComponent works!</p>',
})
export class ShadowDomComponent {}
