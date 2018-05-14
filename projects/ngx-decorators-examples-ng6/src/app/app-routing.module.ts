import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommmonClassComponent } from './common-class';
import { CommonDecoratorComponent } from './common-decorator';
import { MaterialComponent } from './material';
import { OnPushComponent } from './on-push';
import { ShadowDomComponent } from './shadow-dom';

const routes: Routes = [
  { path: 'common-class', component: CommmonClassComponent },
  { path: 'common-decorator', component: CommonDecoratorComponent },
  { path: 'material', component: MaterialComponent },
  { path: 'on-push', component: OnPushComponent },
  { path: 'shadow-dom', component: ShadowDomComponent },
  { path: '', pathMatch: 'full', redirectTo: 'common-decorator' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
