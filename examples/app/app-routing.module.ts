import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommmonClassComponent } from './common-class';

const routes: Routes = [
  { path: 'common-class', component: CommmonClassComponent },
  { path: '', pathMatch: 'full', redirectTo: 'common-class' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
