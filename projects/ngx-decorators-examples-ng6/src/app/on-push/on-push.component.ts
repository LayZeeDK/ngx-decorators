import { Input, OnInit } from '@angular/core';

import { OnPush } from '../common/decorators';

@OnPush({
  selector: 'example-on-push',
  templateUrl: './on-push.component.html',
})
export class OnPushComponent implements OnInit {
  @Input()
  text: string = 'OnPushComponent works!';

  ngOnInit(): void {
    setTimeout(() => {
      this.text = 'OnPushComponent is broken!';
    }, 0);
  }
}
