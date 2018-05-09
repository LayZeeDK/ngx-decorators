import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommmonClassComponent } from './common-class';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    CommmonClassComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
})
export class AppModule {}
