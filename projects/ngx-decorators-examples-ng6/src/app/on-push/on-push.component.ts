import { OnPush } from '../common/decorators';

@OnPush({
  selector: 'example-on-push',
  template: '<p>OnPushComponent works!</p>',
})
export class OnPushComponent {}
