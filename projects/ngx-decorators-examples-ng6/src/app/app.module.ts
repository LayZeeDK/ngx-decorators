import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommmonClassComponent } from './common-class';
import { CommonDecoratorComponent } from './common-decorator';
import { NavigationComponent } from './navigation';
import { OnPushComponent } from './on-push';
import { ShadowDomComponent } from './shadow-dom';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    CommmonClassComponent,
    CommonDecoratorComponent,
    NavigationComponent,
    OnPushComponent,
    ShadowDomComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
})
export class AppModule {}
