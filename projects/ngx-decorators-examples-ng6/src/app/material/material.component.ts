import { Input, OnInit } from '@angular/core';

import { Material } from '../common/decorators/material.decorator';

@Material({
  host: { class: 'example-material' },
  selector: 'example-material',
  styleUrls: ['./material.component.css'],
  templateUrl: './material.component.html',
})
export class MaterialComponent implements OnInit {
  @Input()
  text: string = 'MaterialComponent works!';

  ngOnInit(): void {
    setTimeout(() => {
      this.text = 'MaterialComponent is broken!';
    }, 0);
  }
}
