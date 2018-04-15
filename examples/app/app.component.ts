import { Component } from './common';

@Component({
  selector: 'example-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title: string = 'example';
}
